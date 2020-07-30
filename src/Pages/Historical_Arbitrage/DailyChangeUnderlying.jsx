import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";
import { useEffect } from "react";
import { InputGroup, FormControl } from "react-bootstrap";
import { escapeRegExp } from "lodash";
import orderBy from "lodash/orderBy";

import "./Styles/arbitrage.css";

const DailyChangeUnderlyingFunc = (props) => {
  const DailyChangeUnderlying = props.data;
  return (
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
   );
};

export default DailyChangeUnderlyingFunc;
