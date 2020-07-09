import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";
import { useEffect } from "react";
import { InputGroup, FormControl } from "react-bootstrap";
import { escapeRegExp } from "lodash";
import orderBy from "lodash/orderBy";

import "./Styles/arbitrage.css";

const DailyChangeUnderlyingFunc = (props) => {
  console.log(props);
  const DailyChangeUnderlying = props.data;
  console.log(DailyChangeUnderlying);
  return (
    <Card className="CustomCard smallHeightTable"> 
      <Card.Header className="CustomCardHeader text-white CustomBackGroundColor">
        Underlyings Daily Change
      </Card.Header>
      <Card.Body className="CustomCardBody padding-0 bg-color-dark overflow-auto height-50vh font-size-sm">
        <Table size="sm" striped bordered hover variant="dark">
          <thead>
            <tr>
              <th className="cursor-pointer" >
                Ticker
              </th>
              <th>Daily Change %</th>
              <th>Volume</th>
            </tr>
          </thead>
          <tbody>
            {typeof DailyChangeUnderlying === "object"  &&
              DailyChangeUnderlying.data.map(
                ({ symbol, DailyChangepct, volume }, index) => (
                  <tr key={`symbol${index}`}>
                    <td>{symbol && symbol}</td>
                    <td>{DailyChangepct && DailyChangepct}</td>
                    <td>{volume && volume}</td>
                  </tr>
                )
              )}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
};

export default DailyChangeUnderlyingFunc;