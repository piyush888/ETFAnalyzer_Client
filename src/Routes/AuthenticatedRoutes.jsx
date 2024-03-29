import React from "react";
import ProtectedRoute from "./ProtectedRoute";
import LandingPage from "../Pages/LandingPage/LandingPage";
import {
  Route,
  useHistory,
  generatePath,
  useLocation,
  useParams,
} from "react-router-dom";
import { useEffect } from "react";
import {
  changeHolidayList,
  changeNavbarStartDate,
} from "../Common_Components/NavBar/NavBarActions";
import { useDispatch, useSelector } from "react-redux";
import Axios from "axios";
import ArticlesRoutes from "./ArticlesRoutes";
import moment from "moment";
const EtfDescRoutes = React.lazy(() => import("./EtfDescRoutes"));
const LiveArbitrageSingleRoutes = React.lazy(() =>
  import("./LiveArbitrageSingleRoutes")
);
const LiveArbitrageAllRoutes = React.lazy(() => import("./Live_Arbitrage_All"));
const HistArbiageRoutes = React.lazy(() => import("./HistArbiageRoutes"));

const AuthenticatedRoutes = () => {
  const { isLoggedIn } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const { ETF } = useParams();
  const handleDateChange = (value) => {
    // dispatch({ type: changeNavbarStartDate, payload: { value } });
    // history.push(generatePath(location.pathname, ETF, value));
  };
  useEffect(() => {
    if (isLoggedIn) {
      Axios.get("/api/LastWorkingDate/")
        .then((res) => handleDateChange(res.data))
        .catch((err) => console.log(err));

      Axios.get("/api/ListOfHolidays")
        .then((res) => {
          const tempX = [];
          res.data.HolidayList.forEach((data) =>
            tempX.push(moment(data, "YYYY-MM-DD").toDate())
          );
          dispatch({ type: changeHolidayList, payload: { value: tempX } });
          // setholidaysList(tempX);
          console.log(tempX);
        })
        .catch((err) => console.log(err));
    }
  }, [isLoggedIn]);
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
        <Route path="/articles" component={ArticlesRoutes} />
      </React.Suspense>
    </>
  );
};

export default AuthenticatedRoutes;
