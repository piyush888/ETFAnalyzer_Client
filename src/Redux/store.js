import { createStore, applyMiddleware } from "redux";
import { getFirebase } from "react-redux-firebase";

import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./rootReducer";

const devTools =
  process.env.NODE_ENV === "production"
    ? applyMiddleware(thunk)
    : composeWithDevTools(
        applyMiddleware(thunk)
      );

export const store = createStore(rootReducer, devTools);
