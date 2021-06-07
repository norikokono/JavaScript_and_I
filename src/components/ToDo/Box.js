import React, { Component } from 'react'
  
class Box extends Component {
  render(){
    const { height, width, bc } = this.props.attrs
    const style = { width: `${width}em`, height:`${height}em`, backgroundColor:bc, marginLeft: 500, marginBottom: 200}
    return(
      <div style={style} />
    )
  }
}
  
export default Box