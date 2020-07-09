import React from "react";
import Table from "react-bootstrap/Table";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "axios";
import { tsvParse, csvParse } from "d3-dsv";
import { timeParse } from "d3-time-format";

import './Styles/Live_Arbitrage_All.css';
import Live_Arbitrage_All_Table from './Live_Arbitrage_Table';

import { connect } from "react-redux";


class Live_Arbitrage_All extends React.Component {
  state = {
    LiveArbitrageAllEtf : ''
  };

  componentDidMount() {
    this.fetchETFLiveData();
    this.intervalId = this.dataFetchInterval();
  }
 
  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  dataFetchInterval = () =>
    setInterval(() => {
      if (new Date().getSeconds() == 8) {
        this.fetchETFLiveData();
      }
    }, 1000);

  fetchETFLiveData() {
    const { ETF } = this.props;
    axios.get(`/ETfLiveArbitrage/AllTickers`).then((res) => {
      console.log(res);
      this.setState({
          LiveArbitrageAllEtf: res,
      });
    });
  }

  render() {
    return (
       <Row>
          <Col xs={12} md={5}>
            <Live_Arbitrage_All_Table data={this.state.LiveArbitrageAllEtf || []} />
          </Col>
        </Row>   
    );
  }

}

const mapStateToProps = (state) => {
  return {
    ETF: state.navbar.ETF,
  };
};

export default connect(mapStateToProps, null)(Live_Arbitrage_All);
