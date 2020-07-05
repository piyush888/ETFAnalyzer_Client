const initialState = {
  isLoggedIn: true,
};

const authReducer = (state = initialState, action) => {
  if (action.type === "LOGIN_SUCCESS") {
    state = { ...initialState, ...action.payload, isLoggedIn: true };
    return state;
  }
  if (action.type === "LOGOUT_SUCCESS") {
    state = { ...initialState };
    return state;
  }

  return state;
};

export default authReducer;
