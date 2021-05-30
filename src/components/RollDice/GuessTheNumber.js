
// https://www.geeksforgeeks.org/guess-the-number-with-react/
import React, { Component } from 'react'
import NumberResult from './NumberResult'
  
class GuessTheNumber extends Component{
  
  static defaultProps =  {
    secret : Math.floor(Math.random() * 20) + 1
  }
  
  constructor(props){
    super(props)
    this.state = { term : '' }
  
    this.handleChange = this.handleChange.bind(this)
  }
  
  handleChange(event){
    this.setState({
      [event.target.name] : event.target.value
    })
  }
  
  render(){
    const numberStyle = {
      color: "Teal",
      backgroundColor: "Cyan",
      padding: "30px",
      marginTop: "100px",
      marginBottom: 0,
      width: "400px",
      height: "250px",
      display: "block",
      marginLeft: "auto",
      marginRight: "auto",
    };
    return (
      <div>
        <form style={numberStyle}>
        <div>
          <label htmlFor='term' autoFocus>
            Guess Number between 1 to 20
          </label>
        </div>
        <input
          id='term' 
          type='text' 
          name='term' 
          value={this.state.term} 
          onChange={this.handleChange} 
        />
    
        <NumberResult term={this.state.term} 
            secretNum={this.props.secret} />
        </form>
      </div>
    )
  }
}
export default GuessTheNumber