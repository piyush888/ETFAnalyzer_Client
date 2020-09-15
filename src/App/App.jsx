import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { SignInForm } from "../Common_Components/SignIn";
import AuthenticatedRoutes from "../Routes/AuthenticatedRoutes";
import SignUpForm from "../Common_Components/SignUp/SignUpForm";
import "./App.css";
import AuthProvider from "../Utilities/AuthProvider";
import Live_Arb_Xlkdefault from "../Pages/Live_Arbitrage_Single/Live_Arb_Xlkdefault";

class App extends React.Component {
  render() {
    return (
      <AuthProvider>
        <div>
          <Router>
         
            <Switch>
              <Route exact path="/signup" component={SignUpForm} />
              <Route exact path="/login" component={SignInForm} />
              <Route exact path="/live-arbitrage-xlkdefault" component={Live_Arb_Xlkdefault}/>
              <Route path="/" component={AuthenticatedRoutes} />

            </Switch>
          </Router>
        </div>
      </AuthProvider>
    );
  }
}

export default App;
