import React, { useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';

function Crypto() {
  const initColumnDefs = [
    {
      headerName: 'Name',
      field: 'name'
    },
    {
      headerName: 'Price',
      field: 'price'
    },
    {
      headerName: 'Market Cap',
      field: 'marketCap'
    }
  ];
  const initRowData = [
    {
      name: 'Bitcoin',
      marketCap: '236,719,047,786',
      price: 13000
    },
    {
      name: 'Ethereum',
      marketCap: '37,142,091,955',
      price: 350
    },
    {
      name: 'XRP',
      marketCap: '20,694,062,864 	',
      price: 0.048
    }
  ];
  const [columnDefs, setColumnDefs] = useState(initColumnDefs);
  const [rowData, setRowDefs] = useState(initRowData);

  return (
    <div
      className="ag-theme-material"
      style={{
        height: '500px',
        width: '600px'
      }}>
      <AgGridReact columnDefs={columnDefs} rowData={rowData} />
    </div>
  );
}

export default Crypto;
