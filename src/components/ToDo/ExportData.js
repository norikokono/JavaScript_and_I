// https://www.geeksforgeeks.org/how-to-export-our-datagrid-as-csv-in-reactjs/

import * as React from 'react';
import { DataGrid, GridToolbarExport,GridToolbarContainer } from '@material-ui/data-grid';
  
const columns = [
  { field: 'id', headerName: 'ID', width: 170 },
  { field: 'name', headerName: 'NAME', width: 170 },
  { field: 'age', headerName: 'AGE', width: 170 },
];
  
const rows = [
  { id: 1, name: 'Jon', age: 35 },
  { id: 2, name: 'Cersei', age: 42 },
  { id: 3, name: 'Jaime', age: 45 },
  { id: 4, name: 'Arya', age: 16 },
  { id: 5, name: 'Daenerys', age: 73 },
  { id: 6, name: 'Ferrara', age: 61 },
  { id: 7, name: 'Raghav', age: 44 },
  { id: 8, name: 'Rossini', age: 36 },
  { id: 9, name: 'Hervey', age: 65 },
];
  
function MyExportButton() {
  return (
    <GridToolbarContainer>
      <GridToolbarExport />
    </GridToolbarContainer>
  );
}
  
export default function ExportData() {
  
  return (
    <div style={{height: 570}}>
        <h4 style={{marginBottom: 20}}>How to use export our DataGrid as CSV in ReactJS</h4>      
      <div style={{ height: 400, paddingLeft: 300, paddingRight: 300, width: 1130, margin: "auto"}}>
        <DataGrid rows={rows} columns={columns} 
          pageSize={5} 
          components={{
            Toolbar: MyExportButton,
          }}
        />
      </div>
    </div>
  );
}
