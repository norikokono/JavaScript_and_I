// https://www.geeksforgeeks.org/how-to-use-radio-component-in-reactjs/?ref=rp

import React from 'react';
import Radio from '@material-ui/core/Radio';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
 
 
const RadioButtons = () => {
 
  return (
    <div style={{
      margin: 'auto',
      display: 'block',
      width: 'fit-content',
      paddingTop: 50, 
      color: "gray"
    }}>
      <h4>How to use Radio Component in ReactJS?</h4>
      <FormControl component="fieldset">
      <FormLabel component="legend">Select Your Gender</FormLabel>
      <RadioGroup aria-label="gender" name="gender1">
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
      </RadioGroup>
    </FormControl>
    </div>
  );
}
 
export default RadioButtons;