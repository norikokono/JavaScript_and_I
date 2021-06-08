
import React,{ Component } from 'react'

const styles = {
    backgroundColor: "PaleTurquoise",
    color: "white",
    marginLeft: 500,
    marginRight: 500,
    marginBottom: 10,
    borderRadius: 5
  };
  
class NewBoxForm extends Component{
  constructor(props){
    super(props)
    this.state = { height : 0, width : 0, bc : ''}
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  
  // Form submitting logic, prevent default page 
  // refresh and call create method of BoxList
  // component to create new box
  handleSubmit(event){
    event.preventDefault()
    this.props.create(this.state)
    this.setState({ height : 0, width : 0, bc : ''})
  }
  
  // Method causes to store all the values of the 
  // input field in react state using single method 
  // handleChanges of all the input field
  // using ES6 javascript feature computed property names
  handleChange(event){
    this.setState({
      [event.target.name] : event.target.value
    })
  }
  
  // return a form using which we add box properties 
  // to create Boxes. It is controlled form i.e. values 
  // of the input field not stored in DOM values are exist
  // in react component itself as state
  
  render(){
    return(
        <React.StrictMode>
            <form onSubmit={this.handleSubmit}>
                <div style={styles}>
                <label htmlFor='height'>Height</label>
                <input 
                    name='height'
                    placeholder='Height' 
                    value = {this.state.height}
                    onChange={this.handleChange}
                    style={{width: 500}}
                />
                </div>
                <div style={styles}>
                <label htmlFor='width'>Width</label>
                <input
                    name='width' 
                    placeholder='Width'
                    value={this.state.width}
                    onChange={this.handleChange}
                    style={{width: 500}}
                />
                </div>
                <div style={styles}>
                <label htmlFor='bc'>Background Color</label>
                <input
                    name='bc' 
                    placeholder='Background Color'
                    value={this.state.bc}
                    onChange={this.handleChange}
                    style={{width: 500}}
                />
                </div>
                <div>
                <button style={{backgroundColor: "Turquoise", color: "white", border: "none", borderRadius: 3, marginTop: 10, marginBottom: 80}}>Add a new Box!</button>
                </div>
            </form>
        </React.StrictMode>
    )
  }
}
  
export default NewBoxForm