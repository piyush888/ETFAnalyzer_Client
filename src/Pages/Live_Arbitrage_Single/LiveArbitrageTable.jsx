import React from "react";
import { Table } from "react-bootstrap";

const LiveArbitrageTable = ({ data }) => {
  return (
    <div className="Table">
      <Table size="sm" striped bordered hover variant="dark">
        <thead className="TableHead">
          <tr>
            <th>Time</th>
            <th>$Arbitrage</th>
            <th>$Spread</th>
            <th>$Absolute Arbitrage</th>
            <th>Over Bought/Sold</th>
            <th>Price</th>
            <th>T</th>
            <th>TickVolume</th>
            <th>Etf Mover</th>
            <th>Most Change%</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(data) &&
            data.map((data, index) => {
              let cls = "";
              if (data["Over_Bought/Sold"] == "Over Bought") {
                cls = "red";
              } else if (data["Over_Bought/Sold"] == "Over Sold") {
                cls = "green";
              }
              return (
                <tr className={cls} key={index}>
                  <td>{data.Time}</td>
                  <td>{data.Arbitrage_in_$}</td>
                  <td>{data.ETF_Trading_Spread_in_$}</td>
                  <td>
                    {(data.Magnitude_of_Arbitrage &&
                      data.Magnitude_of_Arbitrage.toFixed(5)) ||
                      0}
                  </td>
                  <td>{data["Over_Bought/Sold"]}</td>
                  <td>{data.ETF_Price}</td>
                  <td>{data["ETF_Change_Price_%"]}</td>
                  <td>{data["TickVolume"]}</td>
                  <td>{data["ETFMover%1_ticker"]}</td>
                  <td>{data["Change%1_ticker"]}</td>
                </tr>
              );
            })}
        </tbody>
      </Table>
    </div>
  );
};

export default LiveArbitrageTable;
