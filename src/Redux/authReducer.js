const initialState = {
  isLoggedIn: false,
  currentUser: null,
};

const authReducer = (state = initialState, action) => {
  if (action.type === "LOGIN_SUCCESS") {
    state = {
      currentUser: action.payload.currentUser,
      isLoggedIn: true,
    };
    return state;
  }
  if (action.type === "LOGOUT_SUCCESS") {
    state = { ...initialState };
    return state;
  }

  return state;
};

export default authReducer;
