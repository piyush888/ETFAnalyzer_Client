import React from "react";
import { CognitoUser, AuthenticationDetails } from "amazon-cognito-identity-js";
import { AuthContextProvider } from "./AuthContext";
import { useReducer } from "react";
import Pool from "./userPool";
import { useHistory } from "react-router-dom";

const initialState = {};

const reducer = (state, action) => {
  switch (action.type) {
    default: {
      return state;
    }
  }
};

const AuthProvider = (props) => {
  const [authData, authDispatch] = useReducer(reducer, initialState);

  const authenticate = async (Username, Password) =>
    await new Promise((resolve, reject) => {
      console.log(Username, Password);
      const user = new CognitoUser({ Username, Pool });
      const authDetails = new AuthenticationDetails({ Username, Password });

      user.authenticateUser(authDetails, {
        onSuccess: (data) => {
          console.log("onSuccess:", data);
          resolve(data);
        },

        onFailure: (err) => {
          console.error("onFailure:", err);
          reject(err);
        },

        newPasswordRequired: (data) => {
          console.log("newPasswordRequired:", data);
          resolve(data);
        },
      });
    });
  const getSession = async () =>
    await new Promise((resolve, reject) => {
      const user = Pool.getCurrentUser();
      if (user) {
        user.getSession(async (err, session) => {
          if (err) {
            reject();
          } else {
            const attributes = await new Promise((resolve, reject) => {
              user.getUserAttributes((err, attributes) => {
                if (err) {
                  reject(err);
                } else {
                  const results = {};

                  for (let attribute of attributes) {
                    const { Name, Value } = attribute;
                    results[Name] = Value;
                  }

                  resolve(results);
                }
              });
            });

            const token = session.getIdToken().getJwtToken();

            resolve({
              user,
              headers: {
                Authorization: token,
              },
              ...session,
              ...attributes,
            });
          }
        });
      } else {
        reject();
      }
    });

  const logout = () => {
    const user = Pool.getCurrentUser();
    if (user) {
      user.signOut();
    }
  };

  return (
    <AuthContextProvider
      value={{
        authenticate,
        getSession,
        logout,
      }}
    >
      {props.children}
    </AuthContextProvider>
  );
};

export default AuthProvider;
