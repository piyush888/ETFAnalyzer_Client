import React from "react";
import axios from "axios";
import { tsvParse, csvParse } from "d3-dsv";
import { timeParse } from "d3-time-format";
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";
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
import { CommonPieChart } from "../../Common_Components/PieChart";
import "./Styles/style.css";
import { CardGroup } from "react-bootstrap";

class Live_Arbitrage_Single extends React.Component {
  state = {
    Full_Day_Arbitrage_Data: [],
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
    CandlestickSignals: [],
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
            Full_Day_Arbitrage_Data: [...res.data.Arbitrage],
            Full_Day_Prices: {
              data: tsvParse(
                res.data.Prices,
                this.parseData(this.state.parseDate)
              ),
            },
            pnlstatementforday: res.data.pnlstatementforday,
            SignalCategorization: res.data.SignalCategorization,
            scatterPlotData: res.data.scatterPlotData,
            ArbitrageLineChart: res.data.ArbitrageLineChart,
            etfmoversDictCount: res.data.etfmoversDictCount,
            highestChangeDictCount: res.data.highestChangeDictCount,
            CandlestickSignals: res.data.CandlestickSignals,
            last_minute_signal: res.data.last_minute_signal,
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
          console.log(res)
          this.setState({
            ...this.state,
            LiveArbitrage: res.data.Arbitrage["Arbitrage_in_$"][0],
            LiveSpread: res.data.Arbitrage["ETF_Trading_Spread_in_$"][0],
            CurrentTime: res.data.Arbitrage["Time"][0],
            LiveVWPrice: res.data.Prices["VWPrice"]["0"],
            OpenPrice: res.data.Prices["open"]["0"],
            ClosePrice: res.data.Prices.close["0"],
            HighPrice: res.data.Prices["high"]["0"],
            LowPrice: res.data.Prices["low"]["0"],
            ETFStatus: res.data.SignalInfo.ETFStatus,
            Signal: res.data.SignalInfo.Signal,
            SignalStrength: res.data.SignalInfo.Strength,
            LiveColor:
              res.data.Arbitrage["Arbitrage_in_$"][0] > 0
                ? "text-danger"
                : res.data.Arbitrage["Arbitrage_in_$"][0] == 0
                ? "text-muted"
                : "text-success",
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
      scatterPlotData,
      SignalCategorization,
      pnlstatementforday,
      last_minute_signal,
      etfmoversDictCount,
      Full_Day_Arbitrage_Data,
      highestChangeDictCount,
      isLoading,
      CandlestickSignals,
    } = this.state;

    return (
      <>
        <CommonNavBar />
        <div className="container-fluid font-size-sm">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="row">
                <div className="col-lg-8 col-md-8 col-sm-12 padding-0">
                  <div className="FullPageDiv" style={{ height: "92vh" }}>
                    <Card bg="dark" text="white">
                      <Card.Header className="flex-row">
                        <span>Live Arbitrage {ETF}</span>
                        <div className="margin-left-auto">
                          <CombinedPieCharts
                            etfmoversDictCount={etfmoversDictCount}
                            highestChangeDictCount={highestChangeDictCount}
                          />
                        </div>
                      </Card.Header>
                      <Card.Body className="padding-1px overflow-auto">
                        {isLoading ? (
                          <Loader />
                        ) : (
                          <LiveArbitrageTable data={Full_Day_Arbitrage_Data} />
                        )}
                      </Card.Body>
                    </Card>
                  </div>
                </div>

                <div className="col-lg-4 col-md-4 col-sm-12">
                  <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12">
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
                        last_minute_signal={last_minute_signal}
                      />
                    </div>

                    <div className="col-lg-12 col-md-12 col-sm-12">
                      <Card className="height-100" bg="dark" text="white">
                        <Card.Header>
                          Alpha Candle Stick Pattern Signals
                        </Card.Header>

                        <Card.Body className="padding-1px overflow-auto">
                          <Table
                            size="sm"
                            striped
                            bordered
                            hover
                            variant="dark"
                          >
                            <thead>
                              <tr>
                                <th>Candle Type</th>
                                <th>Last Occurrence</th>
                                <th>Trade Signal</th>
                              </tr>
                            </thead>
                            <tbody>
                              {CandlestickSignals.map((data, index) => (
                                <tr key={index}>
                                  <td>{data[0]}</td>
                                  <td>{data[1]}</td>
                                  <td>{data[2]}</td>
                                </tr>
                              ))}
                            </tbody>
                          </Table>
                        </Card.Body>
                      </Card>
                    </div>

                    <div className="col-lg-12 col-md-12 col-sm-12">
                      <Card className="height-100" bg="dark" text="white">
                        <Card.Header>Signal Performace</Card.Header>

                        <Card.Body className="padding-1px">
                          {isLoading ? (
                            <Loader />
                          ) : (
                            <Table
                              size="sm"
                              striped
                              bordered
                              hover
                              variant="dark"
                            >
                              <tbody>
                                {Object.entries(pnlstatementforday).map(
                                  ([key, value], index) => (
                                    <tr key={index}>
                                      <td>{key}</td>
                                      <td>{value}</td>
                                    </tr>
                                  )
                                )}
                              </tbody>
                            </Table>
                          )}
                        </Card.Body>
                      </Card>
                    </div>

                    <div className="col-lg-12 col-md-12 col-sm-12">
                      <Card bg="dark" text="white" className="height-100">
                        <Card.Header>Arbitrage Spread</Card.Header>
                        <Card.Body className="padding-1px">
                          {this.state.isLoading ? (
                            <Loader />
                          ) : (
                            <Table
                              size="sm"
                              striped
                              bordered
                              hover
                              variant="dark"
                            >
                              <thead>
                                <tr>
                                  <th>Magnitude</th>
                                  <th># Buy Sign</th>
                                  <th>Buy Ret</th>
                                  <th># Sell Sign</th>
                                  <th>Sell Ret</th>
                                </tr>
                              </thead>
                              <tbody>
                                {Array.isArray(SignalCategorization) &&
                                  SignalCategorization.map((data, index) => (
                                    <tr key={index}>
                                      <td>{data.Magnitude}</td>
                                      <td>{data["# Buy Sign"]}</td>
                                      <td>{data["Buy Ret"]}</td>
                                      <td>{data["# Sell Sign"]}</td>
                                      <td>{data["Sell Ret"]}</td>
                                    </tr>
                                  ))}
                              </tbody>
                            </Table>
                          )}
                        </Card.Body>
                      </Card>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-6 col-sm-12 padding-0">
              <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12">
                  <Card bg="dark" text="white" className="height-100">
                    <Card.Header>Price Chart</Card.Header>
                    <Card.Body className="padding-1px">
                      <ChartComponent data={this.state.Full_Day_Prices} />
                    </Card.Body>
                  </Card>
                </div>

                <div className="col-lg-6 col-md-6 col-sm-12">
                  <Card bg="dark" text="white" className="height-100">
                    <Card.Header>Arb Time Series</Card.Header>

                    <Card.Body className="padding-1px">
                      {this.state.isLoading ? (
                        <Loader />
                      ) : (
                        <LineChartForHistArb
                          data={this.state.ArbitrageLineChart}
                        />
                      )}
                    </Card.Body>
                  </Card>
                </div>

                <div className="col-lg-6 col-md-6 col-sm-12 padding-0">
                  <Card bg="dark" text="white" className="height-100">
                    <Card.Header>ETF Change % Vs NAV change %</Card.Header>

                    <Card.Body className="padding-1px">
                      {this.state.isLoading ? (
                        <Loader />
                      ) : (
                        <ScatterPlot data={scatterPlotData} />
                      )}
                    </Card.Body>
                  </Card>
                </div>
              </div>
            </div>
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
