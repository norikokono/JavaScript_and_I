// https://www.geeksforgeeks.org/react-js-usememo-hook/
import React, { useState, useMemo } from 'react';
  
function UseMemoHook() {
  const [number, setNumber] = useState(0)
  // Using useMemo
  const squaredNum = useMemo(()=> {
    return squareNum(number);
  }, [number])
  const [counter, setCounter] = useState(0);
  
 // Change the state to the input
  const onChangeHandler = (e) => {
    setNumber(e.target.value);
  }
    
  // Increases the counter by 1
  const counterHandlerPlus = () => {
    setCounter(counter + 1);
  }

  const counterHandlerMinus = () => {
    setCounter(counter - 1);
  }

  return (
    <div className="UseMemoHook">
      <h4 style={{marginTop: 50}}>useMemo Hook</h4>
      <input type="number" placeholder="Enter a number"
          value={number} onChange={onChangeHandler} style={{backgroundColor: "AliceBlue", color: "LightSkyBlue", width: 300}}>
      </input>
        <div style={{marginBottom: 20, color: "CadetBlue"}}>OUTPUT: {squaredNum}</div>
      <button onClick={counterHandlerPlus} style={{background: "LightBlue", color: "white", width: 200, borderRadius: 7, border: "none"}}>Counter ++</button><br/>
      <button onClick={counterHandlerMinus} style={{background: "LightBlue", color: "white", width: 200, borderRadius: 7, border: "none", marginTop: 10}}>Counter - - </button>
        <div style={{color: "CadetBlue"}}>Counter : {counter}</div>
    </div>
  );
}
  
// function to square the value
function squareNum(number){
  console.log("Squaring will be done!");
  return Math.pow(number, 2);
}
  
export default UseMemoHook;
