import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";
import { useEffect } from "react";
import "../Styles/styles.css";

const DescriptionTable = (props) => {
  const { DescriptionData } = props;

  const [order, setTableOrder] = useState([]);
  const [orderType, setOrderType] = useState("ASC");

  useEffect(() => {
    if (typeof DescriptionData === "object") {
      const order = Object.keys(DescriptionData).sort();
      setTableOrder(order);
    }
  }, [DescriptionData]);

  const changeOrder = () => {
    if (orderType === "ASC") {
      const order = Object.keys(DescriptionData).sort().reverse();
      setOrderType("DSC");
      setTableOrder(order);
    }
    if (orderType === "DSC") {
      const order = Object.keys(DescriptionData).sort();
      setOrderType("ASC");
      setTableOrder(order);
    }
  };

  return (
    <Card text="light" bg="dark">
      <Card.Header>
        ETF Description
      </Card.Header>
      <Card.Body className="padding-0 overflow-auto height-50vh">
        <Table size="sm" striped bordered hover variant="dark">
          <thead>
            <tr>
              <th className="cursor-pointer" onClick={changeOrder}>
                Name
              </th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            {typeof DescriptionData === "object" &&
              order.map((key) => (
                <tr key={key}>
                  <td>{key && key}</td>
                  <td>{DescriptionData[key] && DescriptionData[key]} </td>
                </tr>
              ))}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
};

export default DescriptionTable;
