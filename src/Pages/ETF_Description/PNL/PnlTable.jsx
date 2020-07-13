import React, { useState } from "react";
import { useEffect } from "react";
import Axios from "axios";
import { Card, Table } from "react-bootstrap";

const PnlTable = (props) => {
  const { ETF } = props;

  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    Axios.get(
      `/api/PastArbitrageData/CommonDataAcrossEtf/${ETF}`
    )
      .then((res) => setTableData(res.data))
      .catch((err) => console.log(err));
  }, [ETF]);

  return (
    <Card style={{width:"100%"}}>
      <Card.Header className="text-white bg-color-dark">PNL Table</Card.Header>
      <Card.Body className="padding-0 bg-color-dark overflow-auto height-50vh font-size-sm">
        <Table size="sm" striped bordered hover variant="dark">
          <thead>
            <tr>
              <th className="cursor-pointer">Date</th>
              <th># R.Buy</th>
              <th># R.Sell</th>
              <th># T.Buy</th>
              <th># T.Sell</th>
              <th>% R.Buy</th>
              <th>% R.Sell</th>
              <th>Buy Return%</th>
              <th>Sell Return%</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(tableData) &&
              tableData.map((data) => {
                return (
                  <tr key={data.Date}>
                    <td>{data.Date}</td>
                    <td>{data["# R.Buy"]}</td>
                    <td>{data["# R.Sell"]}</td>
                    <td>{data["# T.Buy"]}</td>
                    <td>{data["# T.Sell"]}</td>
                    <td>{data["% R.Buy"]}</td>
                    <td>{data["% R.Sell"]}</td>
                    <td className={data["Buy Return%"] < 0 ? "red" : "green"}>
                      {data["Buy Return%"]}
                    </td>
                    <td className={data["Sell Return%"] < 0 ? "red" : "green"}>
                      {data["Sell Return%"]}
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
};

export default PnlTable;
