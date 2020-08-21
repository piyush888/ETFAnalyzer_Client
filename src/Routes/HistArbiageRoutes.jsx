import React from "react";
import { Switch, Redirect } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import { HistoricalArbitrage } from "../Pages/Historical_Arbitrage";
import { useSelector } from "react-redux";

const HistArbiageRoutes = () => {
  const { ETF, startDate } = useSelector((state) => state.navbar);
  return (
    <Switch>
      <ProtectedRoute
        path="/historical-arbitrage/:ETF/:startDate"
        component={HistoricalArbitrage}
      />
         <Redirect
      
      from="/historical-arbitrage/:ETF"
      to={`/historical-arbitrage/:ETF/${startDate}`}
    />
      <Redirect
        from="/historical-arbitrage"
        to={`/historical-arbitrage/${ETF}/${startDate}`}
      />
    </Switch>
  );
};

export default HistArbiageRoutes;
