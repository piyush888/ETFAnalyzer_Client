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
import "./Styles/style.css";

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
        <div className="live-arb-container font-size-sm">
          <div className="live-arb-table">
            <Card bg="dark" text="white" className="height-100">
              <Card.Header className="flex-row">
                <span>Live Arbitrage {ETF}</span>
                <div className="margin-left-auto">
                  <CombinedPieCharts
                    etfmoversDictCount={this.state.etfmoversDictCount}
                    highestChangeDictCount={this.state.highestChangeDictCount}
                  />
                </div>
              </Card.Header>
              <Card.Body className="height-90vh overflow-auto">
                {this.state.isLoading ? (
                  <Loader />
                ) : (
                  <LiveArbitrageTable
                    data={this.state.Full_Day_Arbitrage_Data}
                  />
                )}
              </Card.Body>
            </Card>
          </div>

          <div className="live-status-window">
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
          </div>

          <div className="time-series">
            <Card bg="dark" text="white" className="height-100">
              <Card.Header>Arb Time Series</Card.Header>

              <Card.Body>
                {this.state.isLoading ? (
                  <Loader />
                ) : (
                  <LineChartForHistArb data={this.state.ArbitrageLineChart} />
                )}
              </Card.Body>
            </Card>
          </div>
          <div className="signal-performance">
            <Card className="height-100" bg="dark" text="white">
              <Card.Header>Signal Performace</Card.Header>

              <Card.Body>
                {this.state.isLoading ? (
                  <Loader />
                ) : (
                  this.state.pnlstatementforday
                )}
              </Card.Body>
            </Card>
          </div>

          <div className="signal-stats">
            <Card bg="dark" text="white" className="height-100">
              <Card.Header>Signal Stats</Card.Header>

              <Card.Body>
                {this.state.isLoading ? (
                  <Loader />
                ) : (
                  this.state.SignalCategorization
                )}
              </Card.Body>
            </Card>
          </div>

          <div className="price-chart">
            <Card bg="dark" text="white" className="height-100">
              <Card.Header>Price Chart</Card.Header>
              <Card.Body>
                <ChartComponent data={this.state.Full_Day_Prices} />
              </Card.Body>
            </Card>
          </div>

          <div className="etfchange-navchange">
            <Card bg="dark" text="white" className="height-100">
              <Card.Header>ETF Change % Vs NAV change %</Card.Header>

              <Card.Body>
                {this.state.isLoading ? <Loader /> : this.state.scatterPlotData}
              </Card.Body>
            </Card>
          </div>
        </div>
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
