import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { LoginForm } from "../Common_Components/LoginForm";
import AuthenticatedRoutes from "../Routes/AuthenticatedRoutes";
import ProtectedRoute from "../Routes/ProtectedRoute";

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
      <div className="bg-color-dark">
        <Router>
        <Switch>
          <LoginRoute exact path="/login" component={LoginForm} />
          <ProtectedRoute path="/" component={AuthenticatedRoutes} />
        </Switch>
      </Router>
      </div>
    );
  }
}

export default App;
