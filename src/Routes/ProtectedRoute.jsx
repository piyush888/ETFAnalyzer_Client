import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import AuthContext from "../Utilities/AuthContext";

const ProtectedRoute = ({ component: Component, exp, ...rest }) => {
  const { currentUser } = useContext(AuthContext);

  return (
    <Route
      {...rest}
      render={(routeProps) =>
        !!currentUser ? (
          <Component {...routeProps} />
        ) : (
          <Redirect to={"/login"} />
        )
      }
    />
  );
};

export default ProtectedRoute;
