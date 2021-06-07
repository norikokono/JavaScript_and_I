// https://www.geeksforgeeks.org/how-to-add-statefull-component-without-constructor-class-in-react/
// Example 1: This example illustrates how to class property proposal to initialize state without constructor 
import React, { Component } from 'react'
  
class NoConstructorClass extends Component {
    
  // The class property proposal
  // The state initialization without 
  // constructor class
  state = {msg : 'Hi, There!'}
  
  handleClick(){
    // Changing state
    this.setState({msg : 'Welcome to the React world!'})
  }
    
  render(){
    return (
      <div style={{marginTop: 80}}>
        <h4 style={{color: "Teal"}}>How to add Stateful component without constructor class in React?</h4>
          
        {/* Set click handler */}
        <button onClick={() => this.handleClick()} style={{backgroundColor: "LightBlue", color: "white", border: "none", borderRadius: 3, fontSize: 25, marginTop: 10}}>
          Click here!
        </button>

        <p style={{marginTop: 8, color: "Aqua"}}>{this.state.msg}</p>
      </div>
    )
  }
}
  
export default NoConstructorClass;