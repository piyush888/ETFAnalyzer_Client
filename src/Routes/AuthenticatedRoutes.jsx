import React from "react";
import { Switch, Route, useLocation, useHistory } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import EtfDescRoutes from "./EtfDescRoutes";
import Live_Arbitrage from "../Component/Live-Arbitrage";
import { CommonNavBar } from "../Common_Components/NavBar";
import HistArbiageRoutes from "./HistArbiageRoutes";
import LiveArbitrageSingleRoutes from "./LiveArbitrageSingleRoutes";
// import { GlobalContextProvider } from "../ContextApi/GlobalContext";
// import { useReducer } from "react";
// import { useEffect } from "react";

// const initialState = { ETF: "XLK", startDate: "20200608" };

// const generatePath = (pathName, startDate, ETF) => {
//   const pageName = pathName.split("/")[1];
//   switch (pageName) {
//     case "ETF-Description": {
//       return `/ETF-Description/${ETF}/${startDate}`;
//     }

//     case "historical-arbitrage": {
//       return `/historical-arbitrage/${ETF}/${startDate}`;
//     }

//     case "live-arbitrage-single": {
//       return `/live-arbitrage-single/${ETF}`;
//     }

//     default: {
//       return pathName;
//     }
//   }
// };

// const reducer = (state, action) => {
//   switch (action.type) {
//     case "CHANGE_ETF_NAME": {
//       return { ...state, ETF: action.payload.value };
//     }
//     case "CHANGE_START_DATE": {
//       return { ...state, startDate: action.payload.value };
//     }
//     default: {
//       return state;
//     }
//   }
// };

const AuthenticatedRoutes = () => {
  // const history = useHistory();
  // const location = useLocation();

  // useEffect(() => {
  //   const path = generatePath(location.pathname, state.startDate, state.ETF);
  //   history.push(path);
  // }, [state.startDate, state.ETF]);

  return (
    <>
      <CommonNavBar />
      <Route path="/ETF-Description" component={EtfDescRoutes} />
      <Route
        path="/live-arbitrage-single"
        component={LiveArbitrageSingleRoutes}
      />
      <ProtectedRoute path="/Live-Arbitrage" component={Live_Arbitrage} />
      <Route path="/historical-arbitrage" component={HistArbiageRoutes} />
    </>
  );
};

export default AuthenticatedRoutes;
