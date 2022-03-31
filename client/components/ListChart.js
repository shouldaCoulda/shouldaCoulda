import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'item',
    headerName: 'Item Name',
    width: 150,
    editable: true,
  },
  {
    field: 'expense',
    headerName: 'Type of Expense',
    width: 150,
    editable: true,
  },
  {
    field: 'price',
    headerName: 'Price',
    type: 'number',
    width: 150,
    editable: true,
  },
  {
    field: 'months',
    headerName: 'Months',
    type: 'number',
    sortable: false,
    width: 160,
  },
];

const rows = [
  { id: 1, item: 'Youtube', expense: 'subscription', price: 10, months: 20 },
  { id: 2, item: 'Youtube', expense: 'subscription', price: 10, months: 20 },
  { id: 3, item: 'Youtube', expense: 'subscription', price: 10, months: 20 },
  { id: 4, item: 'Youtube', expense: 'subscription', price: 10, months: 20 },
  { id: 5, item: 'Youtube', expense: 'subscription', price: 10, months: 20 },
];

const ListChart = () => {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
};

export default ListChart;
