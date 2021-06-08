import React from 'react'
class Child extends React.Component{
    
    onTrigger = (event) => {
        this.props.parentCallback(event.target.myname.value);
        event.preventDefault();
    }
  
    render(){
        return(
        <div>
            <h4>How to pass data from child component to its parent in ReactJS ?</h4>
            <form onSubmit = {this.onTrigger}>
                <input type = "text" 
                name = "myname" 
                placeholder = "Enter Name"
                style = {{backgroundColor: "LightBlue", width: 600, margin: "auto"}}
                />
                <input type = "submit"
                 value = "Submit"
                />
            </form>
        </div>
        )
    }
}
export default Child