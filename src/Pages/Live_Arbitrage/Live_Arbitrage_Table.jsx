import React, { useState } from "react";
import { useRef, useEffect } from "react";
import Axios from "axios";
import { Card, Table } from "react-bootstrap";
import orderBy from "lodash/orderBy";
import escapeRegExp from "lodash/escapeRegExp";
import filter from "lodash/filter";
import debounce from "lodash/debounce";
// import { Loader } from "../../Common_Components/Loader";

const Live_Arbitrage_All_Table = (props) => {

  const [tableData, setTableData] = useState([]);
  const [expandedRows, setExpandedRows] = useState([])
  const [orderType, setOrderType] = useState("ASC");
  const [searchString, setSearchString] = useState("");
  const [filterData, setFilterData] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);
  const [isSortedBy, setSorted] = useState("");



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
    // console.log("line 44");
    // console.log(tableData.length);
    // console.log(filterData.length);
    if (tableData.length < 1) {
      // console.log("line 48")
      Axios.get(
        `/api/ETfLiveArbitrage/AllTickers`
      ).then(({ data }) => {
        setTableData(data);
        setFilterData(data);
        // console.log("line 54");
        // console.log(tableData.length);
        // console.log(filterData.length);
        // console.log("line 57");
      })
        .catch((err) => {
          console.log(err);
        });
    }
  });

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

  useInterval(() => {
    // Your custom logic here
    // console.log("line 114");
    if(new Date().getSeconds()===8){
      // callDataAPI()
      // console.log("line 117");
      // console.log('useInterval executed');
      Axios.get(
        `/api/ETfLiveArbitrage/AllTickers`
      ).then(({ data }) => {
            // console.log("line 122");
            setTableData(data);
            setFilterData(data);
            // console.log(data)
            // console.log(tableData.length);
            // console.log(filterData.length);
            // console.log("line 128");
          })
        .catch((err) => console.log(err));
    }
  }, 1000);


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
        <tr>
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

export default Live_Arbitrage_All_Table;
