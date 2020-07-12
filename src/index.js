import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import "./static/css/style.css";

import App from "./App/App.jsx";
import { store } from "./Redux/store";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
