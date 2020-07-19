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
import { Link, useLocation } from "react-router-dom";
import moment from "moment";
import { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeNavbarStartDate, changeNavbarEtfName } from "./NavBarActions";
import Select from "react-dropdown-select";
import { etfSelectOptions } from "./etfSelectOptions";
import AuthContext from "../../Utilities/AuthContext";

const NavBarMain = (props) => {
  const { logout, currentUser } = useContext(AuthContext);

  const location = useLocation();
  const dispatch = useDispatch();
  const { ETF, startDate } = useSelector((state) => state.navbar);

  useEffect(() => {
    const routeName = location.pathname.split("/");

    if (routeName[1] === "ETF-Description") {
      const etfName = routeName[2] ? routeName[2].toUpperCase() : "XLK";
      if (etfName !== ETF || routeName[3] !== startDate) {
        dispatch({
          type: changeNavbarEtfName,

          payload: { value: etfName },
        });
        dispatch({
          type: changeNavbarStartDate,
          payload: { value: routeName[3] },
        });
      }
    }
    if (routeName[1] === "historical-arbitrage") {
      const etfName = routeName[2] ? routeName[2].toUpperCase() : "XLK";
      if (etfName !== ETF || routeName[3] !== startDate) {
        dispatch({
          type: changeNavbarEtfName,

          payload: { value: etfName },
        });
        dispatch({
          type: changeNavbarStartDate,
          payload: { value: routeName[3] },
        });
      }
    }
    if (routeName[1] === "live-arbitrage-single") {
      const etfName = routeName[2] ? routeName[2].toUpperCase() : "XLK";
      if (etfName !== ETF) {
        dispatch({
          type: changeNavbarEtfName,

          payload: { value: etfName },
        });
      }
    }
  }, [location]);

  const handleDateChange = (e) => {
    const date = moment(e.target.value, "YYYY-MM-DD").format("YYYYMMDD");
    dispatch({ type: changeNavbarStartDate, payload: { value: date } });
  };

  const handleEtfChange = (ETF) =>
    dispatch({ type: changeNavbarEtfName, payload: { value: ETF[0].element } });

  const navbarColor = currentUser && currentUser.emailVerified ? ("bg-color-dark"
      ) : (
        "bg-primary"
      );

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
            onChange={handleDateChange}
          />
        </Form>
        {currentUser && currentUser.emailVerified ? (
          <button type="button" class="btn btn-link text-white" onClick={() => {logout();}}>
            Log Out
          </button>
        ) : (
          <ul class="navbar-nav">
              <li class="nav-item active">
                <a class="nav-link" href="/login" onClick={() => {logout();}}>
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
