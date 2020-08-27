import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "axios";
import { tsvParse, csvParse } from "d3-dsv";
import { timeParse } from "d3-time-format";
import Card from "react-bootstrap/Card";
import ChartComponent from "../../Component/StockPriceChart";
import AppTable from "../../Component/Table.js";
import LiveStatusWindow from "./LiveStatusWindow";
import "../../static/css/Live_Arbitrage.css";
import CombinedPieCharts from "../../Component/CombinedPieCharts";
import LiveArbitrageTable from "./LiveArbitrageTable";
import LineChartForHistArb from "../../Component/LineChartForHistArb";
import { Loader } from "../../Common_Components/Loader";
import ScatterPlot from "../../Component/ScatterPlott";
import { CommonNavBar } from "../../Common_Components/NavBar";

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
    ArbitrageLineChart: "",
    etfmoversDictCount: "",
    highestChangeDictCount: "",
    isLoading: true,
  };

  componentDidMount() {
    this.state.isLoading = true;
    this.fetchETFLiveData();
    this.UpdateArbitragDataTables(false);
    this.intervalId = this.dataFetchInterval();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.ETF !== this.props.match.params.ETF) {
      this.state.isLoading = true;
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
    const { ETF } = this.props.match.params;
    if (ETF) {
      axios
        .get(`/api/ETfLiveArbitrage/Single/${ETF}`)
        .then((res) => {
          this.setState({
            ...this.state,
            Full_Day_Arbitrage_Data: JSON.parse(res.data.Arbitrage),
            Full_Day_Prices: {
              data: tsvParse(
                res.data.Prices,
                this.parseData(this.state.parseDate)
              ),
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
            highestChangeDictCount: JSON.parse(res.data.highestChangeDictCount),
            isLoading: false,
          });
        })
        .catch((err) => console.log(err));
    }
  }

  UpdateArbitragDataTables() {
    const { ETF } = this.props.match.params;
    if (ETF) {
      axios
        .get(`/api/ETfLiveArbitrage/Single/UpdateTable/${ETF}`)
        .then((res) => {
          this.setState({
            ...this.state,
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
              res.data.Arbitrage["Arbitrage in $"][0] > 0
                ? "text-success"
                : res.data.Arbitrage["Arbitrage in $"][0] == 0
                ? "text-muted"
                : "text-danger",
          });
        })
        .catch((err) => console.log(err));
    }
  }

  render() {
    const { ETF } = this.props.match.params;
    const {
      HighPrice,
      OpenPrice,
      ClosePrice,
      LowPrice,
      SignalStrength,
      CurrentTime,
      ETFStatus,
      Signal,
      LiveArbitrage,
      LiveSpread,
      LiveColor,
    } = this.state;

    return (
      <>
        <CommonNavBar />
        <Row>
          <Col xs={12} md={5}>
            <Card>
              <Card.Header className="text-white bg-color-dark flex-row">
                Live Arbitrage {ETF}
                <div className="margin-left-auto">
                  <CombinedPieCharts
                    etfmoversDictCount={this.state.etfmoversDictCount}
                    highestChangeDictCount={this.state.highestChangeDictCount}
                  />
                </div>
              </Card.Header>
              <Card.Body className="BlackHeaderForModal">
                {this.state.isLoading ? (
                  <Loader />
                ) : (
                  <div className="FullPageDiv">
                    <LiveArbitrageTable
                      data={this.state.Full_Day_Arbitrage_Data}
                    />
                  </div>
                )}
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} md={3}>
            <Row>
              <Col xs={12} md={12}>
                <LiveStatusWindow
                  HighPrice={HighPrice}
                  OpenPrice={OpenPrice}
                  ClosePrice={ClosePrice}
                  LowPrice={LowPrice}
                  SignalStrength={SignalStrength}
                  CurrentTime={CurrentTime}
                  ETFStatus={ETFStatus}
                  Signal={Signal}
                  LiveArbitrage={LiveArbitrage}
                  LiveSpread={LiveSpread}
                  LiveColor={LiveColor}
                />
              </Col>

              <Col xs={12} md={12}>
                <Card className="CustomCard">
                  <Card.Header className="CustomCardHeader text-white">
                    Arb Time Series
                  </Card.Header>
                  {this.state.isLoading ? (
                    <Loader />
                  ) : (
                    <Card.Body className="CustomCardBody text-white">
                      <LineChartForHistArb
                        data={this.state.ArbitrageLineChart}
                      />
                    </Card.Body>
                  )}
                </Card>
              </Col>

              <Col xs={12} md={12}>
                <Card className="CustomCard">
                  <Card.Header className="CustomCardHeader text-white">
                    Signal Performace
                  </Card.Header>
                  {this.state.isLoading ? (
                    <Loader />
                  ) : (
                    <Card.Body className="CustomCardBody text-white">
                      {this.state.pnlstatementforday}
                    </Card.Body>
                  )}
                </Card>
              </Col>

              <Col xs={12} md={12}>
                <Card className="CustomCard">
                  <Card.Header className="CustomCardHeader text-white">
                    Signal Stats
                  </Card.Header>
                  {this.state.isLoading ? (
                    <Loader />
                  ) : (
                    <Card.Body className="CustomCardBody text-white">
                      {this.state.SignalCategorization}
                    </Card.Body>
                  )}
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
              {this.state.isLoading ? (
                <Loader />
              ) : (
                <Card.Body className="CustomCardBody text-white">
                  {this.state.scatterPlotData}
                </Card.Body>
              )}
            </Card>
          </Col>
        </Row>
      </>
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

export default Live_Arbitrage_Single;
