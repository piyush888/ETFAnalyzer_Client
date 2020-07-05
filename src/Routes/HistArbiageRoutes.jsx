import React from "react";
import { Switch } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import { HistoricalArbitrage } from "../Pages/Historical_Arbitrage";

const HistArbiageRoutes = () => {
  return (
    <Switch>
      <ProtectedRoute
        path="/historical-arbitrage"
        component={HistoricalArbitrage}
      />
    </Switch>
  );
};

export default HistArbiageRoutes;
