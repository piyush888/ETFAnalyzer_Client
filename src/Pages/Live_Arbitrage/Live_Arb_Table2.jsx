import React, { useState } from "react";
import { useRef, useEffect } from "react";
import Axios from "axios";
import BootstrapTable from 'react-bootstrap-table-next';
import filterFactory, { textFilter, selectFilter, numberFilter } from 'react-bootstrap-table2-filter';
import { Card, Table } from "react-bootstrap";
import orderBy from "lodash/orderBy";
import escapeRegExp from "lodash/escapeRegExp";
import filter from "lodash/filter";
import debounce from "lodash/debounce";
// import { Loader } from "../../Common_Components/Loader";

const LiveArbitrageAllTable = (props) => {

    const [tableData, setTableData] = useState([]);
    // const [expandedRows, setExpandedRows] = useState([])
    // const [orderType, setOrderType] = useState("ASC");
    // const [searchString, setSearchString] = useState("");
    const [filteredData, setFilteredData] = useState([]);
    // // const [isLoading, setIsLoading] = useState(true);
    // const [isSortedBy, setSorted] = useState("");
    // const [ArbFilterString, setArbFilterString] = useState("");
    // const [ArbFilterRelOp, setArbFilterRelOp] = useState("");
    // const [SpreadFilterString, setSpreadFilterString] = useState("");
    // const [SpreadFilterRelOp, setSpreadFilterRelOp] = useState("");


    function getAPIdata() {
        Axios.get(
            `/api/ETfLiveArbitrage/AllTickers`
        ).then(({ data }) => {
            setTableData(data);
            // setFilteredData(data);
        })
            .catch((err) => {
                console.log(err);
            });
    }
    /* Custom Hook for interval call of API */
    function useInterval(callback, delay) {
        const savedCallback = useRef();

        // Remember the latest callback.
        useEffect(() => {
            savedCallback.current = callback;
        }, [callback]);

        // Set up the interval.
        useEffect(() => {
            function tick() {
                savedCallback.current();
            }
            if (delay !== null) {
                let id = setInterval(tick, delay);
                return () => clearInterval(id);
            }
        }, [delay]);
    }

    useEffect(() => {
        if (tableData.length < 1) {
            getAPIdata();
        }
    }, []);

    useInterval(() => {
        // Your custom logic here
        if (new Date().getSeconds() === 8) {
            getAPIdata()
        }
    }, 1000);

    // const selectOptions = {
    //     0: 'Over Bought',
    //     1: 'Balanced',
    //     2: 'Over Sold'
    // };

    function priceFormatter(cell, row) {
        if (cell>0) {
            return (
                <span>
                  <strong style={ { color: 'green' } }>{ cell }</strong>
                </span>
              );
        }
        else{
            return (
              <span>
                <strong style={ { color: 'red' } }>{ cell }</strong>
              </span>
            );
          }
      }

    const columns = [{
        dataField: 'symbol',
        text: 'Ticker',
        sort: true,
        filter: textFilter({
        }),
    }, {
        dataField: 'Arbitrage in $',
        text: 'Arbitrage in $',
        sort: true,
        filter: numberFilter({
                comparatorStyle: {padding:'5px'},
                numberStyle: { width: '100px' },
              }),
        formatter: priceFormatter,
    }, {
        dataField: 'ETF Trading Spread in $',
        text: 'ETF Trading Spread in $',
        sort: true,
        filter: numberFilter({
            comparatorStyle: {padding:'5px'},
            numberStyle: { width: '100px'},
          }),
    }, {
        dataField: 'Absolute Arbitrage',
        text: 'Absolute Arbitrage',
        sort: true,
        filter: numberFilter({
            comparatorStyle: {padding:'5px'},
            numberStyle: { width: '100px' },
          }),
    }, {
        dataField: 'ETF Price',
        text: 'ETF Price',
        sort: true,
    }, {
        dataField: 'ETF Change Price %',
        text: 'ETF Change Price %',
        sort: true,
    }, {
        dataField: 'Net Asset Value Change%',
        text: 'Net Asset Value Change%',
        sort: true,
    }, {
        dataField: 'Over Bought/Sold',
        text: 'Over Bought/Sold',
        // formatter: cell => selectOptions[cell],
        // filter: selectFilter({
        //     options: selectOptions
        // })
    }];


    const expandRow = {
        parentClassName: 'table-primary',
        renderer: data => (
            <div>
                <Table striped hover variant="dark" bsPrefix="innerTable">
                    <thead>
                        <tr>
                            <th className="cursor-pointer">Top</th>
                            <th>ETF Mover</th>
                            <th>Moved By</th>
                            <th>Change in Holding</th>
                            <th>Changed by</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr key={"row-expanded-1-" + data.symbol}>
                            <td> #1 </td>
                            <td>{data["ETFMover%1"][0]}</td>
                            <td className={data["ETFMover%1"][1].toFixed(3) < 0 ? "red" : "green"}>{data["ETFMover%1"][1].toFixed(3)}</td>
                            <td>{data["Change%1"][0]}</td>
                            <td className={data["ETFMover%1"][1].toFixed(3) < 0 ? "red" : "green"}>{data["Change%1"][1].toFixed(3)}</td>
                        </tr>
                        <tr key={"row-expanded-2-" + data.symbol}>
                            <td> #2 </td>
                            <td>{data["ETFMover%2"][0]}</td>
                            <td className={data["ETFMover%2"][1].toFixed(3) < 0 ? "red" : "green"}>{data["ETFMover%2"][1].toFixed(3)}</td>
                            <td>{data["Change%2"][0]}</td>
                            <td className={data["Change%2"][1].toFixed(3) < 0 ? "red" : "green"}>{data["Change%2"][1].toFixed(3)}</td>
                        </tr>
                        <tr key={"row-expanded-3-" + data.symbol}>
                            <td> #3 </td>
                            <td>{data["ETFMover%3"][0]}</td>
                            <td className={data["ETFMover%3"][1].toFixed(3) < 0 ? "red" : "green"}>{data["ETFMover%3"][1].toFixed(3)}</td>
                            <td>{data["Change%3"][0]}</td>
                            <td className={data["Change%3"][1].toFixed(3) < 0 ? "red" : "green"}>{data["Change%3"][1].toFixed(3)}</td>
                        </tr>
                        <tr key={"row-expanded-4-" + data.symbol}>
                            <td> #4 </td>
                            <td>{data["ETFMover%4"][0]}</td>
                            <td className={data["ETFMover%4"][1].toFixed(3) < 0 ? "red" : "green"}>{data["ETFMover%4"][1].toFixed(3)}</td>
                            <td>{data["Change%4"][0]}</td>
                            <td className={data["Change%4"][1].toFixed(3) < 0 ? "red" : "green"}>{data["Change%4"][1].toFixed(3)}</td>
                        </tr>
                        <tr key={"row-expanded-5-" + data.symbol}>
                            <td> #5 </td>
                            <td>{data["ETFMover%5"][0]}</td>
                            <td className={data["ETFMover%5"][1].toFixed(3) < 0 ? "red" : "green"}>{data["ETFMover%5"][1].toFixed(3)}</td>
                            <td>{data["Change%5"][0]}</td>
                            <td className={data["Change%5"][1].toFixed(3) < 0 ? "red" : "green"}>{data["Change%5"][1].toFixed(3)}</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        ),
        showExpandColumn: true,
        onExpand: (row, isExpand, rowIndex, e) => {
            console.log(row.id);
            console.log(isExpand);
            console.log(rowIndex);
            console.log(e);
        },
        onExpandAll: (isExpandAll, rows, e) => {
            console.log(isExpandAll);
            console.log(rows);
            console.log(e);
        }
    };

    // const factory = patchFilterFactory(filterFactory, data => {
    //     setFilteredData(prevData => {
    //       if (JSON.stringify(prevData) !== JSON.stringify(data)) {
    //         return data
    //       }
    
    //       return prevData
    //     })
    //   })

    return (
        <div style={{ padding: "20px" }}>
        <BootstrapTable
            keyField="symbol"
            data={tableData}
            bootstrap4={true}
            columns={columns}
            striped
            hover
            size="lg"
            classes="table-dark font-size-sm"
            expandRow={expandRow}
            filter={filterFactory()}
        />
        </div>
    );

};


export default LiveArbitrageAllTable;
