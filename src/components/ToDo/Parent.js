
import React from 'react';
import Child from './Child'
class Parent extends React.Component{
      
       state = {
        name: "",
       }
  
    handleCallback = (childData) =>{
        this.setState({name: childData})
    }
  
    render(){
        const {name} = this.state;
        return(
            <div style={{marginTop: 10, marginBottom: 50, color: "Aqua"}}>
                <Child parentCallback = {this.handleCallback}/>
                {name}
            </div>
        )
    }
}
export default Parent;