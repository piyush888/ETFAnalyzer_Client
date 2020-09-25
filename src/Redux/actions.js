import { firebaseAuth } from "..";

export const logInAction = (currentUser) => (dispatch) => {
  dispatch({ type: "LOGIN_SUCCESS", payload: { currentUser } });
};

export const logOutAction = () => (dispatch) => {
  firebaseAuth
    .signOut()
    .then(() => {
      dispatch({ type: "LOGOUT_SUCCESS" });
    })
    .catch((error) => {});
};
