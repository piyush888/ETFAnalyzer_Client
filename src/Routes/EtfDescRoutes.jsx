import React from "react";
import { Switch, Redirect } from "react-router-dom";
import ETF_Description from "../Pages/ETF_Description/ETF_Description";
import ProtectedRoute from "./ProtectedRoute";
import { useSelector } from "react-redux";

const EtfDescRoutes = () => {
  const { ETF, startDate } = useSelector((state) => state.navbar);
  return (
    
  );
};

export default EtfDescRoutes;
