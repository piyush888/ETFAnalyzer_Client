import React, { useEffect, useState } from "react";
import { AuthContextProvider } from "./AuthContext";

import { firebaseAuth } from "./firebase";

import setAxiosDefaultToken from "./setAxiosDefaultToken";
import { useDispatch } from "react-redux";

const AuthProvider = (props) => {
  const dispatch = useDispatch();
  const [currentUser, setCurrentUser] = useState(null);
  const [pending, setPending] = useState(true);

  const logout = () => {
    dispatch({ type: "LOGOUT_SUCCESS" });
    firebaseAuth.signOut();
  };

  useEffect(() => {
    firebaseAuth.onAuthStateChanged((user) => {
      setCurrentUser(user);

      if (user && user.emailVerified) {
        user.getIdToken().then((token) => setAxiosDefaultToken(token));
        setPending(false);
      } else {
        setPending(false);
      }
    });
  }, []);

  if (pending) {
    return <>Loading...</>;
  }

  return (
    <AuthContextProvider
      value={{
        currentUser,
        logout,
      }}
    >
      {props.children}
    </AuthContextProvider>
  );
};

export default AuthProvider;
