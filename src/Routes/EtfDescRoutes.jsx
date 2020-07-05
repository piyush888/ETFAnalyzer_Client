import React, { useContext } from "react";
import { Redirect, Switch } from "react-router-dom";
import ETF_Description from "../Pages/ETF_Description/ETF_Description";
import ProtectedRoute from "./ProtectedRoute";
import GlobalContext from "../ContextApi/GlobalContext";

const EtfDescRoutes = () => {
  return (
    <Switch>
      <ProtectedRoute path="/ETF-Description" component={ETF_Description} />
      {/* <Redirect
        from="/ETF-Description"
        to={`/ETF-Description/${ETF}/${startDate}`}
      /> */}
    </Switch>
  );
};

export default EtfDescRoutes;
