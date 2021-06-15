
import React,{ Component } from 'react'

const styles = {
  backgroundColor: "PowderBlue",
  color: "white",
  marginLeft: 500,
  marginRight: 500,
  marginBottom: 10,
  borderRadius: 5
};

class Form extends Component{
  constructor(props){
    super(props)
    this.state = { email:'',name:'', age:'', address:'',phoneNo:''}
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  
  // Form submitting logic, prevent default page refresh 
  handleSubmit(event){
    const { email, name, age, address, phoneNo } = this.state
    event.preventDefault()
    alert(`
      ____Your Details____\n
      Email : ${email}
      Name : ${name}
      Age : ${age}
      Address : ${address}
      Phone No : ${phoneNo}
    `)
  }
  
  // Method causes to store all the values of the 
  // input field in react state single method handle 
  // input changes of all the input field using ES6 
  // javascript feature computed property names
  handleChange(event){
    this.setState({
      // Computed property names
      // keys of the objects are computed dynamically
      [event.target.name] : event.target.value
    })
  }
  
  // Return a controlled form i.e. values of the 
  // input field not stored in DOM values are exist 
  // in react component itself as state
  render(){
    return(
      <div>
        <h4 style={{marginBottom: 25}}>How to handle multiple input field in react form with a single function?</h4>
        <form onSubmit={this.handleSubmit}>
          <div style={styles}>
            <label htmlFor='email'>Email</label>
            <input 
              name='email'
              placeholder='Email' 
              value = {this.state.email}
              onChange={this.handleChange}
              style={{maxWidth: 700}}
            />
          </div>
          <div style={styles}>
            <label htmlFor='name'>Name</label>
            <input
              name='name' 
              placeholder='Name'
              value={this.state.name}
              onChange={this.handleChange}
              style={{maxWidth: 700}}
            />
          </div>
          <div style={styles}>
            <label htmlFor='age'>Age</label>
            <input
              name='age' 
              placeholder='Age'
              value={this.state.age}
              onChange={this.handleChange}
              style={{maxWidth: 700}}
            />
          </div>
          <div style={styles}>
            <label htmlFor='address'>Address</label>
            <input
              name='address' 
              placeholder='Address'
              value={this.state.address}
              onChange={this.handleChange}
              style={{maxWidth: 700}}
            />
          </div>
          <div style={styles}>
            <label htmlFor='phoneNo'>Phone Number</label>
            <input
              name='phoneNo' 
              placeholder='Phone Number'
              value={this.state.phoneNo}
              onChange={this.handleChange}
              style={{maxWidth: 700}}
            />
          </div>
          <div>
            <button style={{backgroundColor: "Aqua", color: "white", border: "none", borderRadius: 3, marginTop: 10, marginBottom: 50}}>Create Account</button>
          </div>
        </form>
      </div>
    )
  }
}
  
export default Form;