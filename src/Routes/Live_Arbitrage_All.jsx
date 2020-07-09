import React from "react";
import { Switch } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import { Live_Arbitrage_All } from "../Pages/Live_Arbitrage";

const LiveArbitrageAllRoutes = () => {
  return (
    <Switch>
      <ProtectedRoute
        path="/Live-Arbitrage"
        component={Live_Arbitrage_All}
      />
    </Switch>
  );
};

export default LiveArbitrageAllRoutes;
