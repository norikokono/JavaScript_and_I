// https://www.geeksforgeeks.org/how-to-add-statefull-component-without-constructor-class-in-react/
// Example 2: This example illustrates how to class property proposal to initialize state without constructor 

import React, { Component } from 'react'
  
class NoConstructorClass2 extends Component {
  static defaultProps = {
    courseContent : [
      'JSX', 'React Props', 'React State', 
      'React Lifecycle Methods', 'React Event Handlers',
      'React Router', 'React Hooks', 'Redux',
      'React Context'
    ]
  }
  
  // The class property proposal
  // The state initialization without 
  // constructor class
  state = {msg : 'React Course', content:''}
  
  renderContent(){
    return (
      <ul style={{textAlign: "center",  listStyleType: "none"}}>
        {this.props.courseContent.map(content => (
          <li>{content}</li>
        ))}
      </ul>
    ) 
  }
  
  handleClick(){
    //changing state
    this.setState({
      msg : 'Course Content',
      content : this.renderContent()
    })
  }
    
  render(){
    return (
      <div style={{marginTop: 40}}>
        <p style={{color: "Gray", marginBottom: 2}}>{this.state.msg}</p>     

        {/* set click handler */}
        <button onClick={() => this.handleClick()} style={{backgroundColor: "LightBlue", color: "white", border: "none", borderRadius: 3, fontSize: 25}}>
          Click here to know contents!
        </button>
        <p style={{color: "Aqua"}}>{this.state.content}</p>
      </div>
    )
  }
}
  
export default NoConstructorClass2