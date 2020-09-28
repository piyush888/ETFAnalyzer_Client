import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { SignInForm } from "../Common_Components/SignIn";
import AuthenticatedRoutes from "../Routes/AuthenticatedRoutes";
import SignUpForm from "../Common_Components/SignUp/SignUpForm";
import "./App.css";
import Live_Arb_Xlkdefault from "../Pages/Live_Arbitrage_Single/Live_Arb_Xlkdefault";
import { firebaseAuth } from "..";
import setAxiosDefaultToken from "../Utilities/setAxiosDefaultToken";
import { connect } from "react-redux";
import { logInAction, logOutAction } from "../Redux/actions";
import { ForgetPassword } from "../Common_Components/ForgetPassword";
import 'react-toastify/dist/ReactToastify.css';

class App extends React.Component {
  state = {
    isReady: false,
  };

  componentDidMount() {
    firebaseAuth.onAuthStateChanged((user) => {
      this.setState({ isReady: true });
      if (user) {
        user.getIdToken().then((token) => setAxiosDefaultToken(token));
        this.props.logIn(user);
      } else {
        this.props.logOut();
      }
    });
  }

  render() {
    if (!this.state.isReady) {
      return <div className="white">Loading...</div>;
    }

    return (
      <Router>
        <Switch>
          <Route exact path="/signup" component={SignUpForm} />
          <Route exact path="/login" component={SignInForm} />
          <Route exact path="/forgetpassword" component={ForgetPassword} />
          <Route
            exact
            path="/live-arbitrage-xlkdefault"
            component={Live_Arb_Xlkdefault}
          />
          <Route path="/" component={AuthenticatedRoutes} />
        </Switch>
      </Router>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logIn: (currentUser) => {
      dispatch(logInAction(currentUser));
    },
    logOut: () => {
      dispatch(logOutAction());
    },
  };
};

export default connect(null, mapDispatchToProps)(App);
