import React, { useEffect } from "react";
import { Nav, Navbar, Form } from "react-bootstrap";
import { Link, useLocation, useHistory, useParams } from "react-router-dom";
import moment from "moment";
import { useContext, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeNavbarStartDate, changeNavbarEtfName } from "./NavBarActions";
import Select from "react-dropdown-select";
import { etfSelectOptions } from "./etfSelectOptions";
import AuthContext from "../../Utilities/AuthContext";
import Axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { getPageName } from "../../Utilities/utilFunc";

const generatePath = (pathname = "/", ETF = "XLK", startDate = "20200608") => {
  const page = getPageName(pathname);
  switch (page) {
    case "ETF-Description": {
      return `/ETF-Description/${ETF}/${startDate}`;
    }

    case "historical-arbitrage": {
      return `/historical-arbitrage/${ETF}/${startDate}`;
    }

    case "live-arbitrage-single": {
      return `/live-arbitrage-single/${ETF}`;
    }

    default:
      return pathname;
  }
};

const generateDateAndEtf = (
  pathName,
  ETF,
  etfSelectOptions,
  handleEtfChange,
  handleDateChange,
  holidaysList,
  startDate
) => {
  const page = getPageName(pathName);
  switch (page) {
    case "ETF-Description": {
      return (
        <>
          <Select
            style={{
              color: "black",
              width: "100px",
              marginRight: "10px",
              backgroundColor: "white",
              height: "0px",
            }}
            values={[{ element: `${ETF}`, index: 0 }]}
            placeholder="Select ETFs"
            labelField={"element"}
            valueField={"element"}
            options={etfSelectOptions}
            onChange={handleEtfChange}
            noDataLabel="No matches found"
          />

          <span>&nbsp;&nbsp;</span>
          <Form inline>
            <DatePicker
              utcOffset={0}
              selected={moment(startDate, "YYYYMMDD").toDate()}
              minDate={new Date("06-05-2020")}
              maxDate={new Date()}
              onChange={(e) => handleDateChange(moment(e).format("YYYYMMDD"))}
              excludeDates={holidaysList}
              filterDate={(date) => {
                const day = new Date(date).getDay();
                return day !== 0 && day !== 6;
              }}
            />
          </Form>
        </>
      );
    }

    case "historical-arbitrage": {
      return (
        <>
          <Select
            style={{
              color: "black",
              width: "100px",
              marginRight: "10px",
              backgroundColor: "white",
              height: "0px",
            }}
            values={[{ element: `${ETF}`, index: 0 }]}
            placeholder="Select ETFs"
            labelField={"element"}
            valueField={"element"}
            options={etfSelectOptions}
            onChange={handleEtfChange}
            noDataLabel="No matches found"
          />

          <span>&nbsp;&nbsp;</span>
          <Form inline>
            <DatePicker
              utcOffset={0}
              selected={moment(startDate, "YYYYMMDD").toDate()}
              minDate={new Date("06-05-2020")}
              maxDate={new Date()}
              onChange={(e) => handleDateChange(moment(e).format("YYYYMMDD"))}
              excludeDates={holidaysList}
              filterDate={(date) => {
                const day = new Date(date).getDay();
                return day !== 0 && day !== 6;
              }}
            />
          </Form>
        </>
      );
    }

    case "live-arbitrage-single": {
      return (
        <>
          <Select
            style={{
              color: "black",
              width: "100px",
              marginRight: "10px",
              backgroundColor: "white",
              height: "0px",
            }}
            values={[{ element: `${ETF}`, index: 0 }]}
            placeholder="Select ETFs"
            labelField={"element"}
            valueField={"element"}
            options={etfSelectOptions}
            onChange={handleEtfChange}
            noDataLabel="No matches found"
          />
        </>
      );
    }

    default:
      return <></>;
  }
};

const NavBarMain = (props) => {
  const { logout, currentUser } = useContext(AuthContext);
  const history = useHistory();
  const location = useLocation();
  const { ETF, startDate } = useParams();
  const dispatch = useDispatch();
  const [holidaysList, setholidaysList] = useState([]);

  useEffect(() => {
    if (ETF) {
      dispatch({ type: changeNavbarEtfName, payload: { value: ETF } });
    }
    if (startDate) {
      dispatch({ type: changeNavbarStartDate, payload: { value: startDate } });
    }
    if (!startDate) {
      Axios.get("/api/ListOfHolidays")
        .then((res) => {
          const tempX = [];
          res.data.HolidayList.forEach((data) =>
            tempX.push(moment(data, "YYYY-MM-DD").toDate())
          );
          setholidaysList(tempX);
        })
        .catch((err) => console.log(err));
    }
  }, []);

  const handleDateChange = (value) => {
    dispatch({ type: changeNavbarStartDate, payload: { value } });
    history.push(generatePath(location.pathname, ETF, value));
  };

  const handleEtfChange = (ETF) => {
    dispatch({ type: changeNavbarEtfName, payload: { value: ETF[0].element } });
    history.push(generatePath(location.pathname, ETF[0].element, startDate));
  };

  const navbarColor =
    currentUser && currentUser.emailVerified ? "bg-color-dark" : "bg-primary";

  return (
    <Navbar className={navbarColor} variant="dark" expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link style={{ color: "white" }} as={Link} to="/" eventKey="">
            Home
          </Nav.Link>
          {generateDateAndEtf(
            location.pathname,
            ETF,
            etfSelectOptions,
            handleEtfChange,
            handleDateChange,
            holidaysList,
            startDate
          )}

          {console.log(ETF, startDate)}
        </Nav>

        <Nav className="">
          <Nav.Link
            style={{ color: "white" }}
            as={Link}
            to="/ETF-Description"
            eventKey="ETF-Description"
          >
            ETF-Description
          </Nav.Link>
          <Nav.Link
            style={{ color: "white" }}
            as={Link}
            to="/historical-arbitrage"
            eventKey="Historical"
          >
            Historical Arbitrage
          </Nav.Link>
          <Nav.Link
            style={{ color: "white" }}
            as={Link}
            to="/live-arbitrage-single"
            eventKey="Live-Arbitrage"
          >
            Live-Arbitrage (Focus)
          </Nav.Link>
          <Nav.Link
            style={{ color: "white" }}
            as={Link}
            to="/Live-Arbitrage"
            eventKey="Live-Arbitrage"
          >
            Live-Arbitrage
          </Nav.Link>
        </Nav>

        {currentUser && currentUser.emailVerified ? (
          <button
            type="button"
            className="btn btn-link"
            onClick={() => {
              logout();
            }}
          >
            | Log Out
          </button>
        ) : (
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a
                class="nav-link"
                href="/login"
                onClick={() => {
                  logout();
                }}
              >
                | Sign In
              </a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="/signup">
                Sign Up
              </a>
            </li>
          </ul>
        )}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBarMain;
