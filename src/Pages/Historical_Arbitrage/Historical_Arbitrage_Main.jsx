import React from "react";
import Axios from "axios";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";
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
    underlyingPerformance: [],
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
        .then(({ data }) => {
          console.log(data);
          this.setState({
            ...this.state,
            etfArbitrageTableData: data.etfhistoricaldata,
            PNLStatementForTheDay: data.PNLStatementForTheDay,
            etfPriceData: {
              data: tsvParse(data.etfPrices, this.parseData(this.parseDate)),
            },
            scatterPlotData: data.scatterPlotData,
            etfmoversDictCount: data.etfmoversDictCount,
            highestChangeDictCount: data.highestChangeDictCount,
            SignalCategorization: <AppTable data={data.SignalCategorization} />,
            ArbitrageCumSum: [...data.ArbitrageCumSum],
            isLoading: false,
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  etfUnderlyingPerformance = (ETF, startDate) => {
    if (ETF && startDate) {
      this.setState({ ...this.state, isLoading: true });
      Axios.get(`/api/PastArbitrageData/DailyChange/${ETF}/${startDate}`)
        .then((res) => {
          console.log(res);
          this.setState({
            ...this.state,
            underlyingPerformance: [...res.data],
            isLoading: false,
          });
        })
        .catch((err) => console.log(err));
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
    const {
      isLoading,
      etfArbitrageTableData,
      ArbitrageCumSum,
      etfmoversDictCount,
      highestChangeDictCount,
      PNLStatementForTheDay,
      SignalCategorization,
      underlyingPerformance,
      etfPriceData,
      scatterPlotData,
    } = this.state;
    return (
      <div>
        <CommonNavBar />
        <div className="hist-main-container font-size-sm">
          <div className="arbitrage-table">
            <Card bg="dark" text="light" className="height-100">
              <Card.Header className="flex-row">
                <span>
                  Histortical Data {ETF} {startDate}
                </span>

                <div className="margin-left-auto">
                  <CombinedPieCharts
                    etfmoversDictCount={etfmoversDictCount}
                    highestChangeDictCount={highestChangeDictCount}
                  />
                </div>
              </Card.Header>
              <Card.Body className="height-90vh overflow-auto">
                {isLoading ? (
                  <Loader />
                ) : (
                  <EtfArbitrageTable data={etfArbitrageTableData} />
                )}
              </Card.Body>
            </Card>
          </div>

          <div className="time-series">
            <Card bg="dark" text="light" className="height-100">
              <Card.Header>
                Arb Time Series
              </Card.Header>
              <Card.Body >
                {isLoading ? (
                  <Loader />
                ) : (
                  <LineChartForHistArb data={ArbitrageCumSum} />
                )}
              </Card.Body>
            </Card>
          </div>

          <div className="signal-performance">
            <Card className="height-100" bg="dark" text="light">
              <Card.Header >
                Signal Performance
              </Card.Header>
              <Card.Body >
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
                      {typeof PNLStatementForTheDay === "object" &&
                        Object.entries(PNLStatementForTheDay).map(
                          ([key, value]) => (
                            <tr key={key}>
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

          <div className="signal-stats">
            <Card bg="dark" text="light" className="height-100">
              <Card.Header >
                Signal Stats
              </Card.Header>
              <Card.Body >
                {isLoading ? <Loader /> : SignalCategorization}
              </Card.Body>
            </Card>
          </div>

          <div className="daily-change">
            <Card className="height-100" bg="dark" text="light">
              <Card.Header >
                Underlyings Daily Change
              </Card.Header>
              <Card.Body className="height-30vh overflow-auto padding-sm">
                {this.state.isLoading ? (
                  <Loader />
                ) : (
                  <DailyChangeUnderlyingFunc data={underlyingPerformance} />
                )}
              </Card.Body>
            </Card>
          </div>

          <div className="price-chart">
            <Card bg="dark" text="light" className="height-100">
              <Card.Header>
                Price Chart
              </Card.Header>
              <Card.Body >
                <ChartComponent data={etfPriceData} />
              </Card.Body>
            </Card>
          </div>

          <div className="etfchange-navchange">
            <Card bg="dark" text="light" className="height-100">
              <Card.Header >
                ETF Change % Vs NAV change %
              </Card.Header>
              <Card.Body className="margin-auto">
                <ScatterPlot data={scatterPlotData} />
              </Card.Body>
            </Card>
          </div>
        </div>
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
