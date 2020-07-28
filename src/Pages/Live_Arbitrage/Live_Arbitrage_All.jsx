import React from "react";
// import Table from "react-bootstrap/Table";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import axios from "axios";
// import { tsvParse, csvParse } from "d3-dsv";
// import { timeParse } from "d3-time-format";

import "./Styles/Live_Arbitrage_All.css";
// import LiveArbitrageAllTable from './Live_Arbitrage_Table';
import LiveArbitrageAllTable from "./Live_Arb_Table2";

import { connect } from "react-redux";
import { CommonNavBar } from "../../Common_Components/NavBar";

class Live_Arbitrage_All extends React.Component {
  state = {
    LiveArbitrageAllEtf: "",
  };

  render() {
    return (
      <>
        <CommonNavBar />
        <Row>
          <Col xs={12} md={12} lg={12}>
            <LiveArbitrageAllTable
              data={this.state.LiveArbitrageAllEtf || []}
            />
          </Col>
        </Row>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ETF: state.navbar.ETF,
  };
};

export default connect(mapStateToProps, null)(Live_Arbitrage_All);
