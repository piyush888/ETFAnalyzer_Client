import React from "react";
import { Route } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import EtfDescRoutes from "./EtfDescRoutes";
import { CommonNavBar } from "../Common_Components/NavBar";
import HistArbiageRoutes from "./HistArbiageRoutes";
import LiveArbitrageSingleRoutes from "./LiveArbitrageSingleRoutes";
import LiveArbitrageAllRoutes from "./Live_Arbitrage_All";

const AuthenticatedRoutes = () => {
  return (
    <>
      <CommonNavBar />
      <Route path="/ETF-Description" component={EtfDescRoutes} />
      <Route
        path="/live-arbitrage-single"
        component={LiveArbitrageSingleRoutes}
      />
      <Route path="/Live-Arbitrage" component={LiveArbitrageAllRoutes}/>
      <Route path="/historical-arbitrage" component={HistArbiageRoutes} />
    </>
  );
};

export default AuthenticatedRoutes;
