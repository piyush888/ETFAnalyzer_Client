import React, { useState } from "react";
import { useRef, useEffect } from "react";
import Axios from "axios";
import { Card, Table } from "react-bootstrap";
import orderBy from "lodash/orderBy";
import escapeRegExp from "lodash/escapeRegExp";
import filter from "lodash/filter";
import debounce from "lodash/debounce";
// import { Loader } from "../../Common_Components/Loader";

const LiveArbitrageAllTable = (props) => {

  const [tableData, setTableData] = useState([]);
  const [expandedRows, setExpandedRows] = useState([])
  const [orderType, setOrderType] = useState("ASC");
  const [searchString, setSearchString] = useState("");
  const [filterData, setFilterData] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);
  const [isSortedBy, setSorted] = useState("");
  const [ArbFilterString, setArbFilterString] = useState("");
  const [ArbFilterRelOp, setArbFilterRelOp] = useState("");
  const [SpreadFilterString, setSpreadFilterString] = useState("");
  const [SpreadFilterRelOp, setSpreadFilterRelOp] = useState("");


  function getAPIdata() {
    Axios.get(
      `/api/ETfLiveArbitrage/AllTickers`
    ).then(({ data }) => {
      setTableData(data);
      setFilterData(data);
    })
      .catch((err) => {
        console.log(err);
      });
  }
  /* Custom Hook for interval call of API */
  function useInterval(callback, delay) {
    const savedCallback = useRef();

    // Remember the latest callback.
    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);

    // Set up the interval.
    useEffect(() => {
      function tick() {
        savedCallback.current();
      }
      if (delay !== null) {
        let id = setInterval(tick, delay);
        return () => clearInterval(id);
      }
    }, [delay]);
  }

  useEffect(() => {
    if (tableData.length < 1) {
      getAPIdata();
    }
  }, []);

  useInterval(() => {
    // Your custom logic here
    if (new Date().getSeconds() === 8) {
      getAPIdata()
      setArbFilterString("")
      setSpreadFilterString("")
      setArbFilterRelOp("")
      setSpreadFilterRelOp("")
    }
  }, 1000);

  useEffect(() => {
    setTimeout(() => {
      if (searchString.length < 1 && tableData.length !== 0) {
        return setFilterData(tableData);
      }
      if (tableData.length !== 0) {
        const re = new RegExp(escapeRegExp(searchString), "i");
        const isMatch = (result) => re.test(result.symbol);
        setFilterData(filter(tableData, isMatch));
      }
    }, 300);
  }, [searchString]);

  const handleSearchChange = (e) => {
    setSearchString(e.target.value);
  };

  const operators = {
    '=': function (a, b) { return a == b },
    '!=': function (a, b) { return a != b },
    '<': function (a, b) { return a < b },
    '<=': function (a, b) { return a <= b },
    '>': function (a, b) { return a > b },
    '>=': function (a, b) { return a >= b },
  };

  /*####################### FILTER FOR ARBITRAGE #######################*/
  function doFilter(dataval) {
    return operators[ArbFilterRelOp](dataval["Arbitrage in $"], ArbFilterString);
  }

  useEffect(() => {
    setTimeout(() => {
      if (ArbFilterString.length < 1 && tableData.length !== 0) {
        setFilterData(tableData);
      }

      if (ArbFilterString.length > 0 && ArbFilterRelOp.length > 0) {
        const isFiltered = filter(tableData, doFilter);
        setFilterData(isFiltered)
      }
    }, 300);
  }, [ArbFilterString, ArbFilterRelOp]);
  /*####################### ####################### #######################*/

  /*####################### FILTER FOR SPREAD #######################*/
  function doFilterSpread(dataval) {
    return operators[SpreadFilterRelOp](dataval["ETF Trading Spread in $"], SpreadFilterString);
  }

  useEffect(() => {
    setTimeout(() => {
      if (SpreadFilterString.length < 1 && tableData.length !== 0) {
        setFilterData(tableData);
      }

      if (SpreadFilterString.length > 0 && SpreadFilterRelOp.length > 0) {
        const isFiltered = filter(tableData, doFilterSpread);
        setFilterData(isFiltered)
      }
    }, 300);
  }, [SpreadFilterString, SpreadFilterRelOp]);
  /*####################### ####################### #######################*/

  const changeOrder = (e) => {
    if (orderType === "ASC") {
      const sortedData = orderBy(filterData, [e], ["asc"]);
      setOrderType("DSC");
      setFilterData(sortedData);
      setSorted(e);
    }
    else if (orderType === "DSC") {
      const sortedData = orderBy(filterData, [e], ["desc"]);
      setOrderType("ASC");
      setFilterData(sortedData);
      setSorted(e);
    }
  };

  const getClassNameForSortIcon = (col) => {
    if (isSortedBy === col) {
      if (orderType === "ASC") {
        return "fas fa-sort-down";
      }
      else if (orderType === "DSC") {
        return "fas fa-sort-up";
      }
    }
    else {
      return "fas fa-sort";
    }
  }

  function handleRowClick(rowId) {
    const currentExpandedRows = expandedRows;
    const isRowCurrentlyExpanded = currentExpandedRows.includes(rowId);

    const newExpandedRows = isRowCurrentlyExpanded ?
      currentExpandedRows.filter(id => id !== rowId) :
      currentExpandedRows.concat(rowId);
    setExpandedRows(newExpandedRows);
  };

  function renderItem(data) {
    const clickCallback = () => handleRowClick(data.symbol);
    const itemRows = [
      <tr onClick={clickCallback} key={data.symbol}>
        <td>{data.symbol}</td>
        <td className={data["Arbitrage in $"] < 0 ? "red" : "green"}>
          {data["Arbitrage in $"]}
        </td>
        <td>{data["Absolute Arbitrage"]}</td>
        <td>{data["ETF Price"]}</td>
        <td className={data["ETF Change Price %"] < 0 ? "red" : "green"}>
          {data["ETF Change Price %"]}
        </td>
        <td>{data["ETF Trading Spread in $"]}</td>
        <td>{data["Net Asset Value Change%"]}</td>
      </tr>
    ];

    if (expandedRows.includes(data.symbol)) {
      itemRows.push(
        <tr key={"row-expanded-" + data.symbol}>
          <td colSpan="7">
            <Table striped hover variant="dark" bsPrefix="innerTable">
              <thead>
                <tr>
                  <th className="cursor-pointer">Top</th>
                  <th>ETF Mover</th>
                  <th>Moved By</th>
                  <th>Change in Holding</th>
                  <th>Changed by</th>
                </tr>
              </thead>
              <tbody>
                <tr key={"row-expanded-1-" + data.symbol}>
                  <td> #1 </td>
                  <td>{data["ETFMover%1"][0]}</td>
                  <td className={data["ETFMover%1"][1].toFixed(3) < 0 ? "red" : "green"}>{data["ETFMover%1"][1].toFixed(3)}</td>
                  <td>{data["Change%1"][0]}</td>
                  <td className={data["ETFMover%1"][1].toFixed(3) < 0 ? "red" : "green"}>{data["Change%1"][1].toFixed(3)}</td>
                </tr>
                <tr key={"row-expanded-2-" + data.symbol}>
                  <td> #2 </td>
                  <td>{data["ETFMover%2"][0]}</td>
                  <td className={data["ETFMover%2"][1].toFixed(3) < 0 ? "red" : "green"}>{data["ETFMover%2"][1].toFixed(3)}</td>
                  <td>{data["Change%2"][0]}</td>
                  <td className={data["Change%2"][1].toFixed(3) < 0 ? "red" : "green"}>{data["Change%2"][1].toFixed(3)}</td>
                </tr>
                <tr key={"row-expanded-3-" + data.symbol}>
                  <td> #3 </td>
                  <td>{data["ETFMover%3"][0]}</td>
                  <td className={data["ETFMover%3"][1].toFixed(3) < 0 ? "red" : "green"}>{data["ETFMover%3"][1].toFixed(3)}</td>
                  <td>{data["Change%3"][0]}</td>
                  <td className={data["Change%3"][1].toFixed(3) < 0 ? "red" : "green"}>{data["Change%3"][1].toFixed(3)}</td>
                </tr>
                <tr key={"row-expanded-4-" + data.symbol}>
                  <td> #4 </td>
                  <td>{data["ETFMover%4"][0]}</td>
                  <td className={data["ETFMover%4"][1].toFixed(3) < 0 ? "red" : "green"}>{data["ETFMover%4"][1].toFixed(3)}</td>
                  <td>{data["Change%4"][0]}</td>
                  <td className={data["Change%4"][1].toFixed(3) < 0 ? "red" : "green"}>{data["Change%4"][1].toFixed(3)}</td>
                </tr>
                <tr key={"row-expanded-5-" + data.symbol}>
                  <td> #5 </td>
                  <td>{data["ETFMover%5"][0]}</td>
                  <td className={data["ETFMover%5"][1].toFixed(3) < 0 ? "red" : "green"}>{data["ETFMover%5"][1].toFixed(3)}</td>
                  <td>{data["Change%5"][0]}</td>
                  <td className={data["Change%5"][1].toFixed(3) < 0 ? "red" : "green"}>{data["Change%5"][1].toFixed(3)}</td>
                </tr>
              </tbody>
            </Table>
          </td>
        </tr>
      );
    }

    return itemRows;
  }

  return (
    <Card style={{ width: '100vh', height: '94vh' }}>
      <Card.Header className="text-white bg-color-dark flex-row">Live Arbitrage All ETFs
        <input
          className="margin-left-auto d-inline-block"
          name="search"
          onChange={debounce(handleSearchChange, 500, { leading: true })}
          value={searchString}
          placeholder="Enter ETF to Search"
        />
      </Card.Header>
      <Card.Body className="padding-0 bg-color-dark overflow-auto height-50vh font-size-sm">
        <Table className="overflow-auto" striped bordered hover variant="dark">
          <thead>
            <tr>
              <th className="cursor-pointer">symbol
                <a href="#">
                  <i className={getClassNameForSortIcon("symbol")} key={"sort-symbol"} onClick={() => changeOrder("symbol")}></i>
                </a>
              </th>
              <th className="cursor-pointer">Arbitrage in $
                <a href="#">
                  <i className={getClassNameForSortIcon("Arbitrage in $")} key={"sort-$Arbitrage"} onClick={() => changeOrder("Arbitrage in $")}></i>
                </a>
                <form className="form-inline">
                  <div className="input-group mb-1 mr-sm-1">
                    <select
                      className="custom-select mb-1 mr-sm-2"
                      id="inlineFormCustomSelectPref"
                      onChange={debounce((e) => { setArbFilterRelOp(e.target.value) }, 500, { leading: true })}
                      value={ArbFilterRelOp}
                      defaultValue={{ label: "Choose...", value: "" }}
                    >
                      <option value="">Choose...</option>
                      <option value="=">=</option>
                      <option value="!=">!=</option>
                      <option value=">">&gt;</option>
                      <option value=">=">&gt;=</option>
                      <option value="<">&lt;</option>
                      <option value="<=">&lt;=</option>
                    </select>
                    <input type="text"
                      className="form-control mb-1 mr-sm-2"
                      id="inlineFormCustomArbitrageAbs"
                      placeholder="Arbitrage Value"
                      onChange={debounce((e) => { setArbFilterString(e.target.value) }, 500, { leading: true })}
                      value={ArbFilterString}
                    />
                  </div>
                </form>
              </th>
              <th className="cursor-pointer">Absolute Arbitrage
                <a href="#">
                  <i className={getClassNameForSortIcon("Absolute Arbitrage")} key={"sort-AbsArbitrage"} onClick={() => changeOrder("Absolute Arbitrage")}></i>
                </a>
              </th>
              <th className="cursor-pointer">ETF Price
                <a href="#">
                  <i className={getClassNameForSortIcon("ETF Price")} key={"sort-ETFPrice"} onClick={() => changeOrder("ETF Price")}></i>
                </a>
              </th>
              <th className="cursor-pointer">ETF Change Price %
                <a href="#">
                  <i className={getClassNameForSortIcon("ETF Change Price %")} key={"sort-Change"} onClick={() => changeOrder("ETF Change Price %")}></i>
                </a>
              </th>
              <th className="cursor-pointer">ETF Trading Spread in $
                <a href="#">
                  <i className={getClassNameForSortIcon("ETF Trading Spread in $")} key={"sort-$Spread"} onClick={() => changeOrder("ETF Trading Spread in $")}></i>
                </a>
                <form className="form-inline">
                  <div className="input-group mb-1 mr-sm-1">
                    <select
                      className="custom-select mb-1 mr-sm-2"
                      id="inlineFormCustomSelectSpread"
                      onChange={debounce((e) => { setSpreadFilterRelOp(e.target.value) }, 500, { leading: true })}
                      value={SpreadFilterRelOp}
                      defaultValue={{ label: "Choose...", value: "" }}
                    >
                      <option value="">Choose...</option>
                      <option value="=">=</option>
                      <option value="!=">!=</option>
                      <option value=">">&gt;</option>
                      <option value=">=">&gt;=</option>
                      <option value="<">&lt;</option>
                      <option value="<=">&lt;=</option>
                    </select>
                    <input type="text"
                      className="form-control mb-1 mr-sm-2"
                      id="inlineFormCustomSpread"
                      placeholder="Arbitrage Value"
                      onChange={debounce((e) => { setSpreadFilterString(e.target.value) }, 500, { leading: true })}
                      value={SpreadFilterString}
                    />
                  </div>
                </form>
              </th>
              <th className="cursor-pointer">Net Asset Value Change%
                <a href="#">
                  <i className={getClassNameForSortIcon("Net Asset Value Change%")} key={"sort-NAV"} onClick={() => changeOrder("Net Asset Value Change%")}></i>
                </a>
              </th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(filterData) &&
              filterData.map((data) => {
                return (
                  <>{renderItem(data)}</>
                );
              })}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
};

export default LiveArbitrageAllTable;
