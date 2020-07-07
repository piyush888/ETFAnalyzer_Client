import React from "react";
import { Table } from "react-bootstrap";


const TableStyling = {
  fontSize: "13px",
};

const LiveArbitrageTable = (props) => {
  
  if (props.data["Arbitrage in $"] == undefined) {
    console.log(props.data);
    return "Loading";
  }
  const getKeys = function (someJSON) {
    return Object.keys(someJSON);
  };

  const getRowsData = () => {
    var Time = getKeys(props.data.Time).reverse();
    console.log("Time");
    console.log(Time);
    return Time.map((key, index) => {
      // console.log(key);
      let cls = "";

      if (props.data["Over Bought/Sold"][key] == "Over Bought") {
        cls = "Green";
      } else if (props.data["Over Bought/Sold"][key] == "Over Sold") {
        cls = "Red";
      } else {
        cls = "";
      }

      return (
        <tr key={index}>
          <td className={cls}>{props.data["Time"][key]}</td>
          <td className={cls}>{props.data["Arbitrage in $"][key]}</td>
          <td className={cls}>{props.data["ETF Trading Spread in $"][key]}</td>
          <td className={cls}>{props.data['Magnitude of Arbitrage'][key]}</td>
          <td className={cls}>{props.data['Over Bought/Sold'][key]}</td>
          <td>{props.data['Price'][key]}</td>
          <td>{props.data['ETF Change Price %'][key]}</td>
          <td>{props.data["TickVolume"][key]}</td>
          <td>{props.data["ETFMover%1_ticker"][key]}</td>
          <td>{props.data["Change%1_ticker"][key]}</td>
        </tr>
      );
    });
  };

  return (
    <div className="Table">
      <Table
        size="sm"
        striped
        bordered
        hover
        variant="dark"
        style={TableStyling}
      >
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
