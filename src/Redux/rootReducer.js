import { combineReducers } from "redux";
import authReducer from "./authReducer";
import NavBarReducer from "../Common_Components/NavBar/NavBarReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  navbar: NavBarReducer,
});
export default rootReducer;
