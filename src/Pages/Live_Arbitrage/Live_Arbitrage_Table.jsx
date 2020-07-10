import React, { useState } from "react";
import { useEffect } from "react";
import Axios from "axios";
import { Card, Table } from "react-bootstrap";

const Live_Arbitrage_All_Table = (props) => {

  const [tableData, setTableData] = useState([]);
  const [expandedRows, setExpandedRows] = useState([])

  useEffect(() => {
    Axios.get(
      `/ETfLiveArbitrage/AllTickers`
    )
      .then((res) => setTableData(res.data))
      .catch((err) => console.log(err));
  });

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
      <tr onClick={clickCallback} key={"row-data-" + data.symbol}>
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
        <Card>
          <Card.Body className="padding-0 bg-color-dark overflow-auto font-size-sm">
            <Table responsive striped hover variant="dark" bsPrefix="innerTable">
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
                <tr key={"row-expanded-" + data.id}>
                  <td> #1 </td>
                  <td>{data["ETFMover%1"][0]}</td>
                  <td>{data["ETFMover%1"][1]}</td>
                  <td>{data["Change%1"][0]}</td>
                  <td>{data["Change%1"][1]}</td>
                </tr>
                <tr key={"row-expanded-" + data.id}>
                  <td> #2 </td>
                  <td>{data["ETFMover%2"][0]}</td>
                  <td>{data["ETFMover%2"][1]}</td>
                  <td>{data["Change%2"][0]}</td>
                  <td>{data["Change%2"][1]}</td>
                </tr>
                <tr key={"row-expanded-" + data.id}>
                  <td> #3 </td>
                  <td>{data["ETFMover%3"][0]}</td>
                  <td>{data["ETFMover%3"][1]}</td>
                  <td>{data["Change%3"][0]}</td>
                  <td>{data["Change%3"][1]}</td>
                </tr>
                <tr key={"row-expanded-" + data.id}>
                  <td> #4 </td>
                  <td>{data["ETFMover%4"][0]}</td>
                  <td>{data["ETFMover%4"][1]}</td>
                  <td>{data["Change%4"][0]}</td>
                  <td>{data["Change%4"][1]}</td>
                </tr>
                <tr key={"row-expanded-" + data.id}>
                  <td> #5 </td>
                  <td>{data["ETFMover%5"][0]}</td>
                  <td>{data["ETFMover%5"][1]}</td>
                  <td>{data["Change%5"][0]}</td>
                  <td>{data["Change%5"][1]}</td>
                </tr>
              </tbody>
            </Table>
          </Card.Body>
        </Card>
      );
    }

    return itemRows;
  }

  return (
    <Card style={{ width: '100vh', height: '94vh' }}>
      <Card.Header className="text-white bg-color-dark">Live Arbitrage All ETFs</Card.Header>
      <Card.Body className="padding-0 bg-color-dark overflow-auto height-50vh font-size-sm">
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th className="cursor-pointer">symbol</th>
              <th>Arbitrage in $</th>
              <th>Absolute Arbitrage</th>
              <th>ETF Price</th>
              <th>ETF Change Price %</th>
              <th>ETF Trading Spread in $</th>
              <th>Net Asset Value Change%</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(tableData) &&
              tableData.map((data) => {
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
