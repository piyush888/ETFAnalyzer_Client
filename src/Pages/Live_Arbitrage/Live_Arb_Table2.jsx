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
    const [filteredData, setFilteredData] = useState([]);
    // const [isLoading, setIsLoading] = useState(true);
    const [fetchTime, setfFetchTime] = useState(new Date());
    const [currentTime, setCurrentTime] = useState(new Date());
    const [dataForTime, setDataForTime] = useState(new Date());
    // const [refreshElement, setRefreshElement] = useState([]);
    const [errorCode, setErrorCode] = useState(null);
    // let refreshElement = null;
    


    function getAPIdata() {
        Axios.get(
            `/api/ETfLiveArbitrage/AllTickers`
        ).then(({ data }) => {
            setTableData(data);
            setDataForTime(data[0]['Timestamp']);
            // setFilteredData(data);
        })
            .catch((err) => {
                console.log(err.response.status);
                setErrorCode(err.response.status);
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

    // function getTS() {
    //     if (tableData.length>0) {
    //         setDataForTime(tableData[0]['Timestamp'])
    //         console.log(tableData[0]['Timestamp'])
    //     }
    //     console.log("Timestamp func");
    // }

    useEffect(() => {
        if (tableData.length < 1) {
            getAPIdata()
        }
    }, []);

    useInterval(() => {
        // Your custom logic here
        if (new Date().getSeconds() === 8) {
            getAPIdata();
            setfFetchTime(new Date());
        }
        setCurrentTime(new Date());
    }, 1000);

    const selectOptions = {
        'Over Bought': 'Over Bought',
        'Balanced': 'Balanced',
        'Over Sold': 'Over Sold'
    };

    function priceFormatter(cell, row) {
        if (row['Over Bought/Sold']=='Over Sold') {
            return (
                <span>
                  <strong style={ { color: 'green' } }>{ cell }</strong>
                </span>
              );
        }
        else if (row['Over Bought/Sold']=='Over Bought'){
            return (
              <span>
                <strong style={ { color: 'red' } }>{ cell }</strong>
              </span>
            );
          }
        else{
            return (<>{cell}</>)
        }
      }


    const columns = [{
        dataField: 'symbol',
        text: 'Ticker',
        sort: true,
        filter: textFilter({
            style: {width: '100px', marginLeft:'10px'}
        }),
        sortCaret: (order, column) => {
            if (!order) return (<span>&nbsp;&nbsp;<i className="fas fa-sort"></i></span>);
            else if (order === 'asc') return (<span>&nbsp;&nbsp;<font color="red"><i className="fas fa-sort-down"></i></font></span>);
            else if (order === 'desc') return (<span>&nbsp;&nbsp;<font color="red"><i className="fas fa-sort-up"></i></font></span>);
            return null;
          }
    }, {
        dataField: 'Arbitrage in $',
        text: 'Arbitrage in $',
        sort: true,
        filter: numberFilter({
                comparatorStyle: {padding:'5px'},
                numberStyle: { width: '100px', margin:'10px' },
              }),
        formatter: priceFormatter,
        sortCaret: (order, column) => {
            if (!order) return (<span>&nbsp;&nbsp;<i className="fas fa-sort"></i></span>);
            else if (order === 'asc') return (<span>&nbsp;&nbsp;<font color="red"><i className="fas fa-sort-down"></i></font></span>);
            else if (order === 'desc') return (<span>&nbsp;&nbsp;<font color="red"><i className="fas fa-sort-up"></i></font></span>);
            return null;
          }
    }, {
        dataField: 'ETF Trading Spread in $',
        text: 'ETF Trading Spread in $',
        sort: true,
        filter: numberFilter({
            comparatorStyle: {padding:'5px'},
            numberStyle: { width: '100px', margin:'10px'},
          }),
        formatter: priceFormatter,
        sortCaret: (order, column) => {
            if (!order) return (<span>&nbsp;&nbsp;<i className="fas fa-sort"></i></span>);
            else if (order === 'asc') return (<span>&nbsp;&nbsp;<font color="red"><i className="fas fa-sort-down"></i></font></span>);
            else if (order === 'desc') return (<span>&nbsp;&nbsp;<font color="red"><i className="fas fa-sort-up"></i></font></span>);
            return null;
          }
    }, {
        dataField: 'Absolute Arbitrage',
        text: 'Absolute Arbitrage',
        sort: true,
        filter: numberFilter({
            comparatorStyle: {padding:'5px'},
            numberStyle: { width: '100px', margin: '10px'},
          }),
        formatter: priceFormatter,
        sortCaret: (order, column) => {
            if (!order) return (<span>&nbsp;&nbsp;<i className="fas fa-sort"></i></span>);
            else if (order === 'asc') return (<span>&nbsp;&nbsp;<font color="red"><i className="fas fa-sort-down"></i></font></span>);
            else if (order === 'desc') return (<span>&nbsp;&nbsp;<font color="red"><i className="fas fa-sort-up"></i></font></span>);
            return null;
          }  
    }, {
        dataField: 'ETF Price',
        text: 'ETF Price',
        sort: true,
        formatter: priceFormatter,
        sortCaret: (order, column) => {
            if (!order) return (<span>&nbsp;&nbsp;<i className="fas fa-sort"></i></span>);
            else if (order === 'asc') return (<span>&nbsp;&nbsp;<font color="red"><i className="fas fa-sort-down"></i></font></span>);
            else if (order === 'desc') return (<span>&nbsp;&nbsp;<font color="red"><i className="fas fa-sort-up"></i></font></span>);
            return null;
          }
    }, {
        dataField: 'ETF Change Price %',
        text: 'ETF Change Price %',
        sort: true,
        formatter: priceFormatter,
        sortCaret: (order, column) => {
            if (!order) return (<span>&nbsp;&nbsp;<i className="fas fa-sort"></i></span>);
            else if (order === 'asc') return (<span>&nbsp;&nbsp;<font color="red"><i className="fas fa-sort-down"></i></font></span>);
            else if (order === 'desc') return (<span>&nbsp;&nbsp;<font color="red"><i className="fas fa-sort-up"></i></font></span>);
            return null;
          }
    }, {
        dataField: 'Net Asset Value Change%',
        text: 'Net Asset Value Change%',
        sort: true,
        formatter: priceFormatter,
        sortCaret: (order, column) => {
            if (!order) return (<span>&nbsp;&nbsp;<i className="fas fa-sort"></i></span>);
            else if (order === 'asc') return (<span>&nbsp;&nbsp;<font color="red"><i className="fas fa-sort-down"></i></font></span>);
            else if (order === 'desc') return (<span>&nbsp;&nbsp;<font color="red"><i className="fas fa-sort-up"></i></font></span>);
            return null;
          }
    }, {
        dataField: 'Over Bought/Sold',
        text: 'Over Bought/Sold',
        sort: true,
        formatter: (cell) => selectOptions[cell],
        filter: selectFilter({
            options: selectOptions,
            style: { width: '100px', margin:'10px' }
        }),
        formatter: priceFormatter,
        sortCaret: (order, column) => {
            if (!order) return (<span>&nbsp;&nbsp;<i className="fas fa-sort"></i></span>);
            else if (order === 'asc') return (<span>&nbsp;&nbsp;<font color="red"><i className="fas fa-sort-down"></i></font></span>);
            else if (order === 'desc') return (<span>&nbsp;&nbsp;<font color="red"><i className="fas fa-sort-up"></i></font></span>);
            return null;
          }
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
        },
        expandHeaderColumnRenderer: ({ isAnyExpands }) => {
            if (isAnyExpands) {
              return <i className="fas fa-caret-down" style={{width : '10px'}}></i>;
            }
            return <i className="fas fa-caret-right" style={{width : '10px'}}></i>;
          },
        expandColumnRenderer: ({ expanded }) => {
            if (expanded) {
              return (
                <i className="fas fa-caret-down" style={{width : '10px'}}></i>
              );
            }
            return (
                <i className="fas fa-caret-right" style={{width : '10px'}}></i>
            );
          }
    };

    if (errorCode >= 500){
        // console.log(refreshElement);
        return(
            <h3 style={{color:'red', alignContent:'center'}}>DATA FOR THIS MINUTE WILL BE AVAILABLE AT 8TH SECOND OF THIS MINUTE</h3>
        )
    }

    return (
        <div style={{ padding: "20px" }}>
        <form>
            <div className="form-row">
                <div className="col-md-4 mb-3">
                    <strong className="App-clock text-white">Showing Data for : </strong><strong style={ { color: 'red' }}>{new Date(dataForTime).toLocaleTimeString([], {year: 'numeric', month: 'numeric', day: 'numeric', hour: '2-digit', minute:'2-digit'})}</strong><strong className='text-white'> Local Time</strong>
                </div>
                <div className="col-md-4 mb-3">
                    <strong className="App-clock text-white">Data Fetched at: </strong><strong style={ { color: 'red' }}>{fetchTime.toLocaleString()}</strong><strong className='text-white'> Local Time</strong>
                </div>
                <div className="col-md-4 mb-3">
                    <strong className="App-clock text-white">Current Local time: </strong><strong style={ { color: 'red' }}>{currentTime.toLocaleString()}</strong><strong className='text-white'> Local Time</strong>
                </div>
            </div>
        </form>
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
