// https://www.geeksforgeeks.org/react-js-useref-hook/

import React, {Fragment, useRef} from 'react';
  
function UseRefHook() {
  
  // Creating a ref object using useRef hook
  const focusPoint = useRef(null);
  const onCLickHandler = () => {
    focusPoint.current.value =
      "The quick brown fox jumps over the lazy dog";
      focusPoint.current.focus();
  };
  return (
    <Fragment>
      <h4 style={{marginTop: 80}}>useRef Hook</h4>
      <label style={{color: "gray"}}>
       Click on the action button to 
       focus and populate the text.
      </label><br/>
      <div>
        <button onClick={onCLickHandler} style={{backgroundColor: "LightSteelBlue", color: "white", border: "none", borderRadius: 20, marginBottom: 8}}>
         ACTION
        </button>
      </div>
      <textarea ref={focusPoint} style={{backgroundColor: "LightBlue", width: 700, height: 100, margin: "auto", marginBottom: 90}}/>
    </Fragment>
  );
};
  
export default UseRefHook;