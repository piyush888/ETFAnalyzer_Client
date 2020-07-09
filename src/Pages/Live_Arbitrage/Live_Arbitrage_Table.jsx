import BootstrapTable from 'react-bootstrap-table-next';
import React, { useState } from "react";

import './Styles/Live_Arbitrage_All.css';

const Live_Arbitrage_All_Table = (props) => {
  console.log(props);
  const arbitrageTableAllEtf = [
            {'id':0, 'name':'Look into props for etf data','price':'Do not make use of BootstrapTable class '},
            {'id':1, 'name':'Look into props for etf data','price':'Do not make use of BootstrapTable class '}];
  console.log(arbitrageTableAllEtf);

  const columns = [{
      dataField: 'id',
      text: 'Product ID',
      sort: true
    }, {
      dataField: 'name',
      text: 'Product Name',
      sort: true
    }, {
      dataField: 'price',
      text: 'Product Price',
      sort: true
    }];

  const defaultSorted = [{
    dataField: 'name',
    order: 'desc'
  }];

  const trStyleFunc = () => {
    return { color: '#FFFFFF',backgroundColor: '#FFFAFA' };
  }
  
  return(
    <BootstrapTable
    bootstrap4
    keyField="id"
    data={ arbitrageTableAllEtf }
    columns={ columns }
    classes="ReactBootstrapTableCustomClass"
    />
  )
}

export default Live_Arbitrage_All_Table;