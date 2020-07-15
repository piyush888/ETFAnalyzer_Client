import React, { useEffect, useState } from "react";
import { AuthContextProvider } from "./AuthContext";

import { firebaseAuth } from "./firebase";
import setAxiosDefaultToken from "./setAxiosDefaultToken";

const AuthProvider = (props) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [pending, setPending] = useState(true);

  const logout = () => firebaseAuth.signOut();

  useEffect(() => {
    firebaseAuth.onAuthStateChanged((user) => {
      if (user) {
        user.getIdToken().then((token) => setAxiosDefaultToken(token));
      }

      setCurrentUser(user);
      setPending(false);
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
