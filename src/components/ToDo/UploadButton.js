import React from 'react';
import Button from '@material-ui/core/Button';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import IconButton from '@material-ui/core/IconButton';
// import { CenterFocusStrong } from '@material-ui/icons';
  
const UploadButton = () => {
  
  return (
    <div style={{
      display: 'flex',
      margin: 'auto',
      width: 1000,
      flexWrap: 'wrap',
      alignItems: 'center',
      justifyContent: 'center',
      paddingBottom: 60,
    }}>
      <div style={{ width: '100%', float: 'left'}}>
        <h4>How to use create button to choose file in ReactJS?</h4> <br />
      </div>
      <input
        accept="image/*"
        id="contained-button-file"
        type="file"
        style={{ display: 'none'}}
      />
      <label htmlFor="contained-button-file">
        <Button variant="contained" color="primary" component="span">
          Upload
        </Button>
      </label>&nbsp;&nbsp; 
      <h3 style={{color: "navy"}}>or</h3>
      <input accept="image/*" id="icon-button-file"
        type="file" style={{ display: 'none' }} />
      <label htmlFor="icon-button-file">
        <IconButton color="primary" aria-label="upload picture" 
        component="span">
          <PhotoCamera />
        </IconButton>
      </label>
    </div>
  );
}
  
export default UploadButton;