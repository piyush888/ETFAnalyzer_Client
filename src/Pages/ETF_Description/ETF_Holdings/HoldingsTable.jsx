import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";
import { useEffect } from "react";
import Axios from "axios";
import PieChartModal from "./PieChartModal";
import orderBy from "lodash/orderBy";
import escapeRegExp from "lodash/escapeRegExp";
import filter from "lodash/filter";
import debounce from "lodash/debounce";
import { Spinner } from "react-bootstrap";
import { Loader } from "../../../Common_Components/Loader";

const HoldingsTable = (props) => {
  const { ETF, startDate } = props;
  const [tableData, setTableData] = useState([]);
  const [orderType, setOrderType] = useState("ASC");
  const [searchString, setSearchString] = useState("");
  const [filterData, setFilterData] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    if (startDate && ETF) {
      Axios.get(`/api/ETfDescription/getHoldingsData/${ETF}/${startDate}`)
        .then(({ data }) => {
          setTableData([...data]);
          setFilterData([...data]);
          setLoading(false);
        })
        .catch((err) => console.log(err));
    }
  }, [ETF, startDate]);

  useEffect(() => {
    setTimeout(() => {
      if (searchString.length < 1 && tableData.length !== 0) {
        return setFilterData(tableData);
      }

      if (tableData.length !== 0) {
        const re = new RegExp(escapeRegExp(searchString), "i");
        const isMatch = (result) => re.test(result.TickerSymbol);
        setFilterData(filter(tableData, isMatch));
      }
    }, 300);
  }, [searchString]);

  const changeOrder = () => {
    if (orderType === "ASC") {
      const sortedData = orderBy(filterData, ["TickerSymbol"], ["asc"]);

      setOrderType("DSC");
      setFilterData(sortedData);
    }
    if (orderType === "DSC") {
      const sortedData = orderBy(filterData, ["TickerSymbol"], ["desc"]);
      setOrderType("ASC");
      setFilterData(sortedData);
    }
  };

  const handleSearchChange = (e) => {
    setSearchString(e.target.value);
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <Card>
          <Card.Header className="text-white bg-color-dark flex-row">
            ETF Holdings
            <input
              className="margin-left-auto d-inline-block"
              name="search"
              onChange={debounce(handleSearchChange, 500, { leading: true })}
              value={searchString}
            />
            <PieChartModal data={tableData} element={"TickerWeight"} />
          </Card.Header>

          <Card.Body className="padding-0 bg-color-dark overflow-auto height-50vh font-size-sm">
            <Table size="sm" striped bordered hover variant="dark">
              <thead>
                <tr>
                  <th className="cursor-pointer" onClick={changeOrder}>
                    Symbol
                  </th>
                  <th>TickerName</th>
                  <th>TickerWeight</th>
                </tr>
              </thead>
              <tbody>
                {Array.isArray(filterData) &&
                  filterData.map((data) => (
                    <tr key={data.TickerSymbol}>
                      <td>{data.TickerSymbol}</td>
                      <td>{data.TickerName && data.TickerName}</td>
                      <td> {data.TickerWeight && data.TickerWeight} </td>
                    </tr>
                  ))}
              </tbody>
            </Table>
          </Card.Body>
        </Card>
      )}
    </>
  );
};

export default HoldingsTable;
