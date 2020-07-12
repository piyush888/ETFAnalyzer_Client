import React from "react";
import { Switch, Redirect } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import { Live_Arbitrage_Single } from "../Pages/Live_Arbitrage_Single";
import { useSelector } from "react-redux";

const LiveArbitrageSingleRoutes = () => {
  const { ETF } = useSelector((state) => state.navbar);
  return (
    <Switch>
      <ProtectedRoute
        path="/live-arbitrage-single/:ETF"
        component={Live_Arbitrage_Single}
      />
      <Redirect
        from="/live-arbitrage-single"
        to={`/live-arbitrage-single/${ETF}`}
      />
    </Switch>
  );
};

export default LiveArbitrageSingleRoutes;
