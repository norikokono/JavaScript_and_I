import React, { Component } from 'react'
import { v4 as uuid } from 'uuid'
import NewBoxForm from './NewBoxForm'
import Box from './Box'


class BoxList extends Component{
  constructor(props){
    super(props)
    // Single state boxes initialized with empty array
    // it contains all the created boxes and their properties
    this.state = { boxes : [] }
    this.createBox = this.createBox.bind(this)
  }
  
  // create new box and added it to boxes state
  createBox(attrs){
    const newBox = { ...attrs, id : uuid()}
    this.setState({
      boxes : [...this.state.boxes, newBox]
    })
  }
  
  // Map over each box in boxes state and render a 
  // Box component for each passing its property as
  // props and method is also passed as props which gets 
  // called by the handler callback of Box component
  renderBoxes(){
    return this.state.boxes.map(box => (
      <Box key={box.id} attrs={box} />
    ))
  }
    
  render(){
    return(
      <div>
        <h5>Make New Color Boxes!</h5>
        {/* component to create form  
            and passes create method as */}
        <NewBoxForm create={this.createBox}/>
        {this.renderBoxes()}
      </div>
    )
  }
}
  
export default BoxList
