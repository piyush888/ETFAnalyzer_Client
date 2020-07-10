import React from "react";
import { Switch, Redirect } from "react-router-dom";
import ETF_Description from "../Pages/ETF_Description/ETF_Description";
import ProtectedRoute from "./ProtectedRoute";
import { useSelector } from "react-redux";

const EtfDescRoutes = () => {
  const { ETF, startDate } = useSelector((state) => state.navbar);
  return (
    <Switch>
      <ProtectedRoute
        path="/ETF-Description/:ETF/:startDate"
        component={ETF_Description}
      />
      <Redirect
        from="/ETF-Description"
        to={`/ETF-Description/${ETF}/${startDate}`}
      />
    </Switch>
  );
};

export default EtfDescRoutes;
