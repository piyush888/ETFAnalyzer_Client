import React from "react";
import Table from "react-bootstrap/Table";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "axios";
import { tsvParse, csvParse } from "d3-dsv";
import { timeParse } from "d3-time-format";
import Card from "react-bootstrap/Card";
import ChartComponent from "../../Component/StockPriceChart";
import ScatterPlot from "../../Component/ScatterPlot";
import AppTable from "../../Component/Table.js";
import LiveStatusWindow from "./LiveStatusWindow";
import "../../static/css/Live_Arbitrage.css";
import { connect } from "react-redux";

import CombinedPieCharts from "../../Component/CombinedPieCharts";
import LiveArbitrageTable from "./LiveArbitrageTable";
import LineChartForHistArb from "../../Component/LineChartForHistArb";

class Live_Arbitrage_Single extends React.Component {
  state = {
    Full_Day_Arbitrage_Data: {},
    Full_Day_Prices: "",
    scatterPlotData: "",
    LiveArbitrage: "",
    LiveSpread: "",
    // Prices
    LiveVWPrice: "",
    OpenPrice: "",
    ClosePrice: "",
    HighPrice: "",
    LowPrice: "",
    parseDate: timeParse("%Y-%m-%d %H:%M:%S"),
    CurrentTime: "",
    // Signal
    ETFStatus: "",
    Signal: "",
    SignalStrength: "",
    pnlstatementforday: "",
    LiveColor: "",
    ArbitrageLineChart:"",
    etfmoversDictCount: "",
    highestChangeDictCount: "",
  };

  componentDidMount() {
    this.fetchETFLiveData();
    this.UpdateArbitragDataTables(false);
    this.intervalId = this.dataFetchInterval();
  }

  componentWillUpdate(prevProps) {
    if (prevProps.ETF !== this.props.ETF) {
      clearInterval(this.intervalId);
      this.fetchETFLiveData();
      this.UpdateArbitragDataTables(false);
      this.intervalId = this.dataFetchInterval();
    }
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  dataFetchInterval = () =>
    setInterval(() => {
      if (new Date().getSeconds() == 8) {
        this.UpdateArbitragDataTables(true);
        this.fetchETFLiveData();
      }
    }, 1000);

  fetchETFLiveData() {
    const { ETF } = this.props;
    axios.get(`/ETfLiveArbitrage/Single/${ETF}`).then((res) => {
      console.log(res);
      this.setState({
        Full_Day_Arbitrage_Data: JSON.parse(res.data.Arbitrage),
        Full_Day_Prices: {
          data: tsvParse(res.data.Prices, this.parseData(this.state.parseDate)),
        },
        pnlstatementforday: (
          <AppTable data={JSON.parse(res.data.pnlstatementforday)} />
        ),
        SignalCategorization: (
          <AppTable data={JSON.parse(res.data.SignalCategorization)} />
        ),
        scatterPlotData: (
          <ScatterPlot data={JSON.parse(res.data.scatterPlotData)} />
        ),
        ArbitrageLineChart: res.data.ArbitrageLineChart,
        etfmoversDictCount: JSON.parse(res.data.etfmoversDictCount),
        highestChangeDictCount: JSON.parse(res.data.highestChangeDictCount)
      });
    });
  }

  UpdateArbitragDataTables(appendToPreviousTable) {
    const { ETF } = this.props;
    axios.get(`/ETfLiveArbitrage/Single/UpdateTable/${ETF}`).then((res) => {
      //console.log(res);
      if (appendToPreviousTable) {
        console.log("Append To Previous table");
      } else {
        this.setState({
          LiveArbitrage: res.data.Arbitrage["Arbitrage in $"][0],
          LiveSpread: res.data.Arbitrage["ETF Trading Spread in $"][0],
          CurrentTime: res.data.Arbitrage["Time"][0],
          LiveVWPrice: res.data.Prices["VWPrice"][0],
          OpenPrice: res.data.Prices["open"][0],
          ClosePrice: res.data.Prices["close"][0],
          HighPrice: res.data.Prices["high"][0],
          LowPrice: res.data.Prices["low"][0],
          ETFStatus: res.data.SignalInfo.ETFStatus,
          Signal: res.data.SignalInfo.Signal,
          SignalStrength: res.data.SignalInfo.Strength,
          LiveColor:
            res.data.Arbitrage["Arbitrage in $"][0] < 0
              ? "text-success"
              : res.data.Arbitrage["Arbitrage in $"][0] == 0
              ? "text-muted"
              : "text-danger",
        });
      }
    });
  }

  render() {
    return (
      <Row>
        <Col xs={12} md={5}>
            <Card>
              <Card.Header className="text-white bg-color-dark flex-row">
                Live Arbitrage   {this.props.ETF}

                <div className="margin-left-auto">
                  <CombinedPieCharts
                    etfmoversDictCount={this.state.etfmoversDictCount}
                    highestChangeDictCount={this.state.highestChangeDictCount}
                  />
                </div>
              </Card.Header>
              <Card.Body className="BlackHeaderForModal">
                <div className="FullPageDiv">
                  <LiveArbitrageTable data={this.state.Full_Day_Arbitrage_Data} />
                </div>
              </Card.Body>
            </Card>
        </Col>

        <Col xs={12} md={3}>
          <Row>
            <Col xs={12} md={12}>
              <LiveStatusWindow
                HighPrice={this.state.HighPrice}
                OpenPrice={this.state.OpenPrice}
                ClosePrice={this.state.ClosePrice}
                LowPrice={this.state.LowPrice}
                SignalStrength={this.state.SignalStrength}
                CurrentTime={this.state.CurrentTime}
                ETFStatus={this.state.ETFStatus}
                Signal={this.state.Signal}
                LiveArbitrage={this.state.LiveArbitrage}
                LiveSpread={this.state.LiveSpread}
                LiveColor={this.state.LiveColor}
              />
            </Col>


            <Col xs={12} md={12}>
              <Card className="CustomCard">
                <Card.Header className="CustomCardHeader text-white">
                  Arb Time Series
                </Card.Header>
                <Card.Body className="CustomCardBody text-white">
                  <LineChartForHistArb data={this.state.ArbitrageLineChart} />
                </Card.Body>
              </Card>
            </Col>

            <Col xs={12} md={12}>
              <Card className="CustomCard">
                <Card.Header className="CustomCardHeader text-white">
                  Signal Performace
                </Card.Header>
                <Card.Body className="CustomCardBody text-white">
                  {this.state.pnlstatementforday}
                </Card.Body>
              </Card>
            </Col>

            <Col xs={12} md={12}>
              <Card className="CustomCard">
                <Card.Header className="CustomCardHeader text-white">
                  Signal Stats
                </Card.Header>
                <Card.Body className="CustomCardBody text-white">
                  {this.state.SignalCategorization}
                </Card.Body>
              </Card>
            </Col>

          </Row>
        </Col>

        <Col xs={12} md={4}>
          <div className="DescriptionTable3">
             <Card>
                <Card.Header className="modalCustomHeader text-white CustomBackGroundColor">
                  Price Chart
                </Card.Header>
                <Card.Body className="BlackHeaderForModal">
                  <ChartComponent data={this.state.Full_Day_Prices} />
                </Card.Body>
              </Card>
          </div>

          <Card className="CustomCard">
            <Card.Header className="CustomCardHeader text-white">
              ETF Change % Vs NAV change %
            </Card.Header>
            <Card.Body className="CustomCardBody text-white">
              {this.state.scatterPlotData}
            </Card.Body>
          </Card>
            
        </Col>
      </Row>
    );
  }

  // Parse Data For Stock Price Chart
  parseData(parse) {
    return function (d) {
      d.date = parse(d.date);
      d.open = +parseFloat(d.open);
      d.high = +parseFloat(d.high);
      d.low = +parseFloat(d.low);
      d.close = +parseFloat(d.close);
      d.volume = +parseInt(d.TickVolume);

      return d;
    };
  }
}

const mapStateToProps = (state) => {
  return {
    ETF: state.navbar.ETF,
  };
};

export default connect(mapStateToProps, null)(Live_Arbitrage_Single);
