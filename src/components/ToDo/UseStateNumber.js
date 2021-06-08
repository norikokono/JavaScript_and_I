// https://www.geeksforgeeks.org/reactjs-usestate-hook/
import React, { useState } from 'react';
 
function UseStateNumber () {
  const [click, setClick] = useState([]);
   
  const addNumber = () => {
    setClick([
      ...click,
      {
        id: click.length,
        value: Math.random() * 10
      }
    ]);
  };
   
 
  return (
    <div>
      <h4>useState Hook</h4>
      <button onClick={addNumber} style={{backgroundColor: "Cyan", color: "white", border: "none", borderRadius: 5, marginBottom: 20}}>
        Click me
      </button>
      <ul style={{ listStyle: "none", paddingLeft: 0, color: "LightSeaGreen"}}>
       {click.map(item => (
          <li key={item.id}>{item.value}</li>
       ))}
      </ul>
    </div>
  );
}
 
export default UseStateNumber;