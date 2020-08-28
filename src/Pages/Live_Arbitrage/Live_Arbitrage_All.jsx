import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Styles/Live_Arbitrage_All.css";
import LiveArbitrageAllTable from "./Live_Arb_Table";
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
