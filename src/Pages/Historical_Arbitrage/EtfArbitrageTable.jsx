import React from "react";
import { Table } from "react-bootstrap";

const EtfArbitrageTable = (props) => {
  if (props.data == {} || props.data == undefined) {
    return "Loading";
  }

  const { data } = props;

  const getKeys = function (someJSON) {
    return Object.keys(someJSON);
  };

  const getRowsData = () => {
    const Time = getKeys(props.data.Time);

    return Time.map((key, index) => {
      let cls = "";
      if (props.data["Over Bought/Sold"][key] == "Over Bought") {
        cls = "green";
      } else if (props.data["Over Bought/Sold"][key] == "Over Sold") {
        cls = "red";
      } else {
        cls = "";
      }
      return (
        <tr key={index}>
          <td className={cls}>{props.data["Time"][key]}</td>
          <td className={cls}>{props.data["Arbitrage in $"][key]}</td>
          <td className={cls}>{props.data["$Spread"][key]}</td>
          <td className={cls}>{props.data["Absolute Arbitrage"][key]}</td>
          <td className={cls}>{props.data["Over Bought/Sold"][key]}</td>
          <td>{props.data["ETF Price"][key]}</td>
          <td>{props.data["T"][key]}</td>
          <td>{props.data["ETFMover%1_ticker"][key]}</td>
          <td>{props.data["Change%1_ticker"][key]}</td>
        </tr>
      );
    });
  };

  return (
    <Table
      size="sm"
      striped
      bordered
      hover
      variant="dark"
      className="font-size-sm"
    >
      <thead>
        <tr>
          <th>Time</th>
          <th>$Arbitrage</th>
          <th>$Spread</th>
          <th>$Absolute Arbitrage</th>
          <th>Over Bought/Sold</th>
          <th>ETF Price</th>
          <th>T</th>
          <th>Etf Mover</th>
          <th>Most Change%</th>
        </tr>
      </thead>
      <tbody>{getRowsData()}</tbody>
    </Table>
  );
};

export default EtfArbitrageTable;
