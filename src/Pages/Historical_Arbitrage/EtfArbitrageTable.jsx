import React from "react";
import { Table } from "react-bootstrap";

const EtfArbitrageTable = (props) => {
  if (props.data == {} || props.data == undefined) {
    return "Loading";
  }

  const { data } = props;

  
console.log(data)
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
      <tbody>
        {Array.isArray(data) &&
          data.map((data, index) => {
            let cls = "";
            if (data["Over Bought/Sold"] == "Over Bought") {
              cls = "red";
            } else if (data["Over Bought/Sold"] == "Over Sold") {
              cls = "green";
            } else {
              cls = "";
            }
            return (
              <tr key={index}>
                <td className={cls}>{data["Time"] || ""}</td>
                <td className={cls}>{data["Arbitrage in $"] || ""}</td>
                <td className={cls}>{data["$Spread"] || ""}</td>
                <td className={cls}>{data["Absolute Arbitrage"] || ""}</td>
                <td className={cls}>{data["Over Bought/Sold"] || ""}</td>
                <td>{data["ETF Price"] || ""}</td>
                <td>{data["T"] || ""}</td>
                <td>{data["ETFMover%1_ticker"] || ""}</td>
                <td>{data["Change%1_ticker"] || ""}</td>
              </tr>
            );
          })}
      </tbody>
    </Table>
  );
};

export default EtfArbitrageTable;
