import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ component: Component, exp, ...rest }) => {
  const { currentUser } = useSelector((state) => state.auth);

  return (
    <Route
      {...rest}
      render={(routeProps) =>
        !!currentUser && currentUser.emailVerified ? (
          <Component {...routeProps} />
        ) : (
          <Redirect to={"/login"} />
        )
      }
    />
  );
};

export default ProtectedRoute;
