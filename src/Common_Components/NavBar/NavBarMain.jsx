import React, { useEffect } from "react";
import {
  Nav,
  Navbar,
  Form,
  NavDropdown,
  FormControl,
  Button,
  Dropdown,
} from "react-bootstrap";
import { Link, useLocation, useHistory, useParams } from "react-router-dom";
import moment from "moment";
import { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeNavbarStartDate, changeNavbarEtfName } from "./NavBarActions";
import Select from "react-dropdown-select";
import { etfSelectOptions } from "./etfSelectOptions";
import AuthContext from "../../Utilities/AuthContext";
import Axios from "axios";

const generatePath = (pathname = "/", ETF = "XLK", startDate = "20200608") => {
  const page = pathname.split("/")[1];
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
      return "/";
  }
};

const NavBarMain = (props) => {
  const { logout, currentUser } = useContext(AuthContext);
  const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();
  const { ETF, startDate } = useSelector((state) => state.navbar);

  useEffect(() => {
    Axios.get("/api/LastWorkingDate")
      .then((res) => handleDateChange(res.data))
      .then((err) => console.log(err));
  }, []);

  useEffect(() => {
    const pathName = location.pathname.split("/");
    const page = pathName[1];

    switch (page) {
      case "ETF-Description": {
        if (pathName.length === 4) {
          dispatch({
            type: changeNavbarEtfName,

            payload: { value: pathName[2].toUpperCase() },
          });
          dispatch({
            type: changeNavbarStartDate,
            payload: { value: pathName[3] },
          });
        }

        break;
      }

      case "historical-arbitrage": {
        if (pathName.length === 4) {
          dispatch({
            type: changeNavbarEtfName,

            payload: { value: pathName[2].toUpperCase() },
          });
          dispatch({
            type: changeNavbarStartDate,
            payload: { value: pathName[3] },
          });
        }

        break;
      }

      case "live-arbitrage-single": {
        if (pathName.length === 3) {
          dispatch({
            type: changeNavbarEtfName,

            payload: { value: pathName[2].toUpperCase() },
          });
        }

        break;
      }

      default:
        break;
    }
  }, [location]);

  const handleDateChange = (value) => {
    const date = moment(value, "YYYY-MM-DD").format("YYYYMMDD");
    dispatch({ type: changeNavbarStartDate, payload: { value: date } });
    history.push(generatePath(location.pathname, ETF, date));
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

        <Select
          style={{
            color: "black",
            width: "150px",
            marginRight: "20px",
            backgroundColor: "white",
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
          <FormControl
            value={moment(startDate, "YYYYMMDD").format("YYYY-MM-DD")}
            type="date"
            placeholder="Start Date"
            className="mr-sm-2"
            onChange={(e) => handleDateChange(e.target.value)}
          />
        </Form>
        {currentUser && currentUser.emailVerified ? (
          <button
            type="button"
            class="btn btn-link text-white"
            onClick={() => {
              logout();
            }}
          >
            Log Out
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
                Sign In
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
