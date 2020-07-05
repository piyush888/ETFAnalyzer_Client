import React, { useContext } from "react";
import { Redirect, Switch } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import { Live_Arbitrage_Single } from "../Pages/Live_Arbitrage_Single";

const LiveArbitrageSingleRoutes = () => {
  return (
    <Switch>
      <ProtectedRoute
        path="/live-arbitrage-single"
        component={Live_Arbitrage_Single}
      />
    </Switch>
  );
};

export default LiveArbitrageSingleRoutes;
