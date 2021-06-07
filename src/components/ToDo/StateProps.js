// https://www.geeksforgeeks.org/how-to-send-state-props-to-another-component-in-react-with-onclick/
// For class-based component.
// First Component i.e. App
  
import React, { Component } from 'react';
import Component2 from './Component2';
  
class StateProps extends Component {  
    state = {data:""}

    changeState = () => {  
      this.setState({data:`State/props of parent component 
      is send by onClick event to another component`}); 
         }; 

    render(){   
        return (     
            <div className="StateProps" style={{color: "Teal"}}>  
               <div className="main-component-container" style={{marginTop: 50}}>
                  <h4 style={{color:"Teal"}}>How to send state/props to another component in React with onClick?</h4>
                  <h5 >Component 1</h5> 
               <button  onClick={this.changeState} type="button" style={{background: "LightSalmon", color: "white", border: "none", borderRadius: 4 ,marginBottom: 30, fontSize: 25}}> 
                  Send state 
               </button>    
               <Component2 data={this.state.data} />   
                </div>
            </div>   
        );          
    }}
  
    export default StateProps; 




//////////////////////////////////////////////////////
// For Function-based component.

// First component i.e App
  
// import React, { useState } from 'react';
// import './App.css'
// import Component2 from './Component2';
  
// function App() {
  
//     const [state, setstate] = useState({data:""})
  
//     const changeState = () => {  
//         setstate({data:`state/props of parent component 
//         is send by onClick event to another component`}); 
//        }; 
  
//     return (  
//         <div className="App">  
//             <Component2 data={state.data} />   
//             <div className="main-cointainer">
//                 <h2>Compnent1</h2> 
//                 <button  onClick={changeState} type="button">
//                   Send state 
//                 </button>    
//             </div>
//         </div>                 
//     );
//  }
  
//  export default App;