// https://www.geeksforgeeks.org/how-to-add-custom-filter-in-search-box-in-reactjs/

import React from 'react'
import TextField from '@material-ui/core/TextField';
import Autocomplete, { createFilterOptions } from '@material-ui/lab/Autocomplete';
// import { Block } from '@material-ui/icons';
  
const CustomFilter = () => {
  
  const filterOptions = createFilterOptions({
    matchFrom: 'start',
    stringify: option => option,
  });
  
  // Sample options for search box
  const myOptions = ['One','Two','Three','Four','Five','Six','Seven','Eight','Nine','Ten'];
  
  return (
    <div style={{ display: "block", marginLeft: "auto", marginRight: "auto", marginBottom: 90}}>
      <h4>Custom</h4>
      <Autocomplete
        style={{ width: 700, display: "block", marginLeft: "auto", marginRight: "auto", color: "white"}}
        freeSolo
        filterOptions={filterOptions}
        options={myOptions}
        renderInput={(params) => (
          <TextField {...params}
            variant="outlined"
            label="Custom Filter"
            color="secondary"
          />
        )}
      />
    </div>
  );
}
  
export default CustomFilter;