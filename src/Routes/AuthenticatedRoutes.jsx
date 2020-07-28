import React from "react";
import ProtectedRoute from "./ProtectedRoute";
// import EtfDescRoutes from "./EtfDescRoutes";
// import HistArbiageRoutes from "./HistArbiageRoutes";
// import LiveArbitrageSingleRoutes from "./LiveArbitrageSingleRoutes";
// import LiveArbitrageAllRoutes from "./Live_Arbitrage_All";
import LandingPage from "../Pages/LandingPage/LandingPage";
import { Route } from "react-router-dom";
const EtfDescRoutes = React.lazy(() => import("./EtfDescRoutes"));
const LiveArbitrageSingleRoutes = React.lazy(() =>
  import("./LiveArbitrageSingleRoutes")
);
const LiveArbitrageAllRoutes = React.lazy(() => import("./Live_Arbitrage_All"));
const HistArbiageRoutes = React.lazy(() => import("./HistArbiageRoutes"));

const AuthenticatedRoutes = () => {
  return (
    <>
      <React.Suspense fallback={<div>Loading...</div>}>
        <Route exact path={"/"} component={LandingPage} />
        <ProtectedRoute path="/ETF-Description" component={EtfDescRoutes} />
        <ProtectedRoute
          path="/live-arbitrage-single"
          component={LiveArbitrageSingleRoutes}
        />
        <ProtectedRoute
          path="/Live-Arbitrage"
          component={LiveArbitrageAllRoutes}
        />
        <ProtectedRoute
          path="/historical-arbitrage"
          component={HistArbiageRoutes}
        />
      </React.Suspense>
    </>
  );
};

export default AuthenticatedRoutes;
