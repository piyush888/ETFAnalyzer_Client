import React from "react";
import Axios from "axios";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";
import Table from "react-bootstrap/Table";
// Code to display chaer
import { tsvParse } from "d3-dsv";
import { timeParse } from "d3-time-format";
import "./Styles/arbitrage.css";
import EtfArbitrageTable from "./EtfArbitrageTable";

import DailyChangeUnderlyingFunc from "./DailyChangeUnderlying";

import LineChartForHistArb from "../../Component/LineChartForHistArb";
import ChartComponent from "../../Component/StockPriceChart";
import CombinedPieCharts from "../../Component/CombinedPieCharts";
import AppTable from "../../Component/Table";

import { connect } from "react-redux";
import { Loader } from "../../Common_Components/Loader";
import ScatterPlot from "../../Component/ScatterPlott";
import { CommonNavBar } from "../../Common_Components/NavBar";

class HistoricalArbitrage extends React.Component {
  state = {
    etfArbitrageTableData: null,
    historicalArbitrageData: "",
    scatterPlotData: "",
    etfmoversDictCount: null,
    etfPriceData: "",
    ArbitrageCumSum: [],
    highestChangeDictCount: null,
    isLoading: true,
  };
  parseDate = timeParse("%Y-%m-%d %H:%M:%S");

  parseData(parse) {
    return function (d) {
      d.date = parse(d.date);
      d["Over Bought/Sold"] = d["Over Bought/Sold"];
      d.open = +parseFloat(d.open);
      d.high = +parseFloat(d.high);
      d.low = +parseFloat(d.low);
      d.close = +parseFloat(d.close);
      d.volume = +parseInt(d.volume);

      return d;
    };
  }

  fetchData = (ETF, startDate) => {
    if (ETF && startDate) {
      this.setState({ ...this.state, isLoading: true });
      Axios.get(`/api/PastArbitrageData/${ETF}/${startDate}`)
        .then(({ data }) =>
          this.setState({
            etfArbitrageTableData: data.etfhistoricaldata,
            PNLStatementForTheDay: data.PNLStatementForTheDay,
            etfPriceData: {
              data: tsvParse(data.etfPrices, this.parseData(this.parseDate)),
            },
            scatterPlotData: data.scatterPlotData,
            etfmoversDictCount: data.etfmoversDictCount,
            highestChangeDictCount: data.highestChangeDictCount,
            SignalCategorization: (
              <AppTable data={data.SignalCategorization} />
            ),
            ArbitrageCumSum: data.ArbitrageCumSum,
            isLoading: false,
          })
        )
        .catch((err) => {
          console.log(err);
        });
    }
  };

  etfUnderlyingPerformance = (ETF, startDate) => {
    if (ETF && startDate) {
      this.setState({ ...this.state, isLoading: true });
      Axios.get(`/api/PastArbitrageData/DailyChange/${ETF}/${startDate}`).then(
        (res) => {
        
          this.setState({
            ...this.state,
            underlyingPerformance: res,
            isLoading: false,
          });
        }
      ).catch(err => console.log(err));
    }
  };

  componentDidMount() {
    const { ETF, startDate } = this.props.match.params;

    this.fetchData(ETF, startDate);
    this.etfUnderlyingPerformance(ETF, startDate);
  }

  componentDidUpdate(prevProps) {
    const {
      ETF: prevPropsETF,
      startDate: prevPropsStartDate,
    } = prevProps.match.params;
    const { ETF, startDate } = this.props.match.params;

    if (prevPropsETF !== ETF || prevPropsStartDate !== startDate) {
      this.fetchData(ETF, startDate);
      this.etfUnderlyingPerformance(ETF, startDate);
    }
  }

  render() {
    const { ETF, startDate } = this.props.match.params;
    return (
      <div>
        <CommonNavBar />
        <Row>
          <Col className="etfArbitrageTable" xs={12} md={5}>
            <Card>
              <Card.Header className=" text-white bg-color-dark flex-row">
                <span>
                  Histortical Data {ETF} {startDate}
                </span>

                <div className="margin-left-auto">
                  <CombinedPieCharts
                    etfmoversDictCount={this.state.etfmoversDictCount}
                    highestChangeDictCount={this.state.highestChangeDictCount}
                  />
                </div>
              </Card.Header>
              <Card.Body className="BlackHeaderForModal height-90vh overflow-auto">
                {this.state.isLoading ? (
                  <Loader />
                ) : (
                  <EtfArbitrageTable data={this.state.etfArbitrageTableData} />
                )}
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} md={7}>
            <Row>
              <Col xs={12} md={5}>
                <Row>
                  <Col xs={12} md={12}>
                    <Card className="CustomCard">
                      <Card.Header className="CustomCardHeader text-white">
                        Arb Time Series
                      </Card.Header>
                      <Card.Body className="CustomCardBody text-white">
                        {this.state.isLoading ? (
                          <Loader />
                        ) : (
                          <LineChartForHistArb
                            data={this.state.ArbitrageCumSum}
                          />
                        )}
                      </Card.Body>
                    </Card>
                  </Col>

                  <Col xs={12} md={12}>
                    <Card className="CustomCard">
                      <Card.Header className="CustomCardHeader text-white">
                        Signal Performance
                      </Card.Header>
                      <Card.Body className="CustomCardBody text-white">
                        {this.state.isLoading ? (
                          <Loader />
                        ) : (
                          <Table
                            size="sm"
                            striped
                            bordered
                            hover
                            variant="dark"
                            className="font-size-sm"
                          >
                            <tbody>
                              {typeof this.state.PNLStatementForTheDay ===
                                "object" &&
                                Object.entries(
                                  this.state.PNLStatementForTheDay
                                ).map(([key, value]) => (
                                  <tr key={key}>
                                    <td>{key}</td>
                                    <td>{value}</td>
                                  </tr>
                                ))}
                            </tbody>
                          </Table>
                        )}
                      </Card.Body>
                    </Card>
                  </Col>

                  <Col xs={12} md={12}>
                    <Card className="CustomCard">
                      <Card.Header className="CustomCardHeader text-white">
                        Signal Stats
                      </Card.Header>
                      <Card.Body className="CustomCardBody text-white">
                        {this.state.isLoading ? (
                          <Loader />
                        ) : (
                          this.state.SignalCategorization
                        )}
                      </Card.Body>
                    </Card>
                  </Col>

                  <Col xs={12} md={12}>
                    <Card className="CustomCard smallHeightTable">
                      <Card.Header className="CustomCardHeader text-white CustomBackGroundColor">
                        Underlyings Daily Change
                      </Card.Header>
                      <Card.Body className="CustomCardBody padding-0 bg-color-dark overflow-auto height-50vh font-size-sm">
                        {this.state.isLoading ? (
                          <Loader />
                        ) : (
                          <DailyChangeUnderlyingFunc
                            data={this.state.underlyingPerformance}
                          />
                        )}
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </Col>

              <Col xs={12} md={7}>
                <Row>
                  <Col xs={12} md={12}>
                    <Card>
                      <Card.Header className="modalCustomHeader text-white CustomBackGroundColor">
                        Price Chart
                      </Card.Header>
                      <Card.Body className="BlackHeaderForModal">
                        <ChartComponent data={this.state.etfPriceData} />
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col xs={12} md={12}>
                    <Card className="CustomCard">
                      <Card.Header className="CustomCardHeader text-white">
                        ETF Change % Vs NAV change %
                      </Card.Header>
                      <Card.Body className="CustomCardBody text-white">
                        <ScatterPlot data={this.state.scatterPlotData} />
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ETF: state.navbar.ETF,
    startDate: state.navbar.startDate,
  };
};

export default connect(mapStateToProps, null)(HistoricalArbitrage);
