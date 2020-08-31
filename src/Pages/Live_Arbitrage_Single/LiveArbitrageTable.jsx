import React from "react";
import { Table } from "react-bootstrap";

const LiveArbitrageTable = (props) => {
  console.log(props)
  if (props.data["Arbitrage in $"] == undefined) {
    return "Loading";
  }
  const getKeys = function (someJSON) {
    return Object.keys(someJSON);
  };

  const getRowsData = () => {
    const Time = getKeys(props.data.Time).reverse();
    return Time.map((key, index) => {
      let cls = "";

      if (props.data["Over Bought/Sold"][key] == "Over Bought") {
        cls = "red";
      } else if (props.data["Over Bought/Sold"][key] == "Over Sold") {
        cls = "green";
      } else {
        cls = "";
      }

      return (
        <tr key={index}>
          <td className={cls}>{props.data["Time"][key]}</td>
          <td className={cls}>{props.data["Arbitrage in $"][key]}</td>
          <td className={cls}>{props.data["ETF Trading Spread in $"][key]}</td>
          <td className={cls}>{props.data["Magnitude of Arbitrage"][key]}</td>
          <td className={cls}>{props.data["Over Bought/Sold"][key]}</td>
          <td>{props.data["ETF Price"][key]}</td>
          <td>{props.data["ETF Change Price %"][key]}</td>
          <td>{props.data["TickVolume"][key]}</td>
          <td>{props.data["ETFMover%1_ticker"][key]}</td>
          <td>{props.data["Change%1_ticker"][key]}</td>
        </tr>
      );
    });
  };

  return (
    <div className="Table">
      <Table size="sm" striped bordered hover variant="dark">
        <thead className="TableHead">
          <tr>
            <td>Time</td>
            <td>$Arbitrage</td>
            <td>$Spread</td>
            <td>$Absolute Arbitrage</td>
            <td>Over Bought/Sold</td>
            <td>Price</td>
            <td>T</td>
            <td>TickVolume</td>
            <th>Etf Mover</th>
            <th>Most Change%</th>
          </tr>
        </thead>
        <tbody>{getRowsData()}</tbody>
      </Table>
    </div>
  );
};

export default LiveArbitrageTable;
