import React, { useContext, useState } from "react";
import { Route, Redirect, useHistory } from "react-router-dom";
import { useEffect } from "react";
import AuthContext from "../Utilities/AuthContext";

const ProtectedRoute = ({ component: Component, exp, ...rest }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const { getSession } = useContext(AuthContext);
  const history = useHistory();

  useEffect(() => {
    getSession()
      .then((session) => {
        console.log(session);
        setLoggedIn(true);
      })
      .catch((err) => history.push("/login"));
  }, []);

  return (
    <>
      {true ? (
        <Route
          {...rest}
          render={(props) => {
            return <Component {...props} />;
          }}
        />
      ) : (
        <div>loading...</div>
      )}
    </>
  );
};

export default ProtectedRoute;
