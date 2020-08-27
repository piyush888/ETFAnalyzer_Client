import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";
import { useEffect } from "react";
import { InputGroup, FormControl } from "react-bootstrap";
import { escapeRegExp } from "lodash";
import orderBy from "lodash/orderBy";

const SimilarAssetUnderManagement = (props) => {
  const { SimilarTotalAsstUndMgmt } = props;
  const [searchValue, setSearchValue] = useState("");
  const [tableData, setTableData] = useState([]);
  const [orderType, setOrderType] = useState("ASC");

  useEffect(() => {
    const sortedData = orderBy(SimilarTotalAsstUndMgmt, ["etfTicker"], ["asc"]);

    setOrderType("DSC");
    setTableData(sortedData);
  }, [SimilarAssetUnderManagement]);

  const changeOrder = () => {
    if (orderType === "ASC") {
      const sortedData = orderBy(
        SimilarTotalAsstUndMgmt,
        ["etfTicker"],
        ["asc"]
      );

      setOrderType("DSC");
      setTableData(sortedData);
    }
    if (orderType === "DSC") {
      const sortedData = orderBy(
        SimilarTotalAsstUndMgmt,
        ["etfTicker"],
        ["desc"]
      );
      setOrderType("ASC");
      setTableData(sortedData);
    }
  };

  return (
    <Card bg="dark" text="light">
      <Card.Header>
        Similar Asset under Management
      </Card.Header>
      <Card.Body className="padding-0 overflow-auto height-50vh">
        <Table size="sm" striped bordered hover variant="dark">
          <thead>
            <tr>
              <th className="cursor-pointer" onClick={changeOrder}>
                Symbol
              </th>
              <th>ETF Name</th>
              <th>Total Asset</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(tableData) &&
              tableData.map(
                ({ ETFName, TotalAssetsUnderMgmt, etfTicker }, index) => (
                  <tr key={`etfTicker${index}`}>
                    <td>{etfTicker && etfTicker}</td>
                    <td>{ETFName && ETFName}</td>
                    <td>{TotalAssetsUnderMgmt && TotalAssetsUnderMgmt}</td>
                  </tr>
                )
              )}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
};

export default SimilarAssetUnderManagement;
