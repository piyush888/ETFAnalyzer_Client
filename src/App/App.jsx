import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { SignInForm } from "../Common_Components/SignIn";
import AuthenticatedRoutes from "../Routes/AuthenticatedRoutes";
import ProtectedRoute from "../Routes/ProtectedRoute";
import SignUpForm from "../Common_Components/SignUp/SignUpForm";
import "./App.css";
import AuthProvider from "../Utilities/AuthProvider";

const LoginRoute = ({ component: Component, exp, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        false ? (
          <Redirect
            to={{
              pathname: "/",
              state: { from: props.location },
            }}
          />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

class App extends React.Component {
  render() {
    return (
      <AuthProvider>
        <div className="bg-color-dark">
          <Router>
            <Switch>
              <Route exact path="/signup" component={SignUpForm} />
              <LoginRoute exact path="/login" component={SignInForm} />
              <ProtectedRoute path="/" component={AuthenticatedRoutes} />
            </Switch>
          </Router>
        </div>
      </AuthProvider>
    );
  }
}

export default App;
