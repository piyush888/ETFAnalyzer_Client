import React from "react";
import { Switch } from "react-router-dom";
import ETF_Description from "../Pages/ETF_Description/ETF_Description";
import ProtectedRoute from "./ProtectedRoute";

const EtfDescRoutes = () => {
  return (
    <Switch>
      <ProtectedRoute path="/ETF-Description" component={ETF_Description} />
    </Switch>
  );
};

export default EtfDescRoutes;
