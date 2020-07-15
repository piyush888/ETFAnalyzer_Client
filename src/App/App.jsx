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

class App extends React.Component {
  render() {
    return (
      <AuthProvider>
        <div>
          <Router>
            <Switch>
              <Route exact path="/signup" component={SignUpForm} />
              <Route exact path="/login" component={SignInForm} />
              <ProtectedRoute path="/" component={AuthenticatedRoutes} />
            </Switch>
          </Router>
        </div>
      </AuthProvider>
    );
  }
}

export default App;
