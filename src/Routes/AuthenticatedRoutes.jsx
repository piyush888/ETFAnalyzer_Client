import React from "react";
import { Route } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import EtfDescRoutes from "./EtfDescRoutes";
import Live_Arbitrage from "../Component/Live-Arbitrage";
import { CommonNavBar } from "../Common_Components/NavBar";
import HistArbiageRoutes from "./HistArbiageRoutes";
import LiveArbitrageSingleRoutes from "./LiveArbitrageSingleRoutes";

const AuthenticatedRoutes = () => {
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
