// https://www.geeksforgeeks.org/how-to-create-a-color-box-app-using-reactjs/

import React,{ Component } from 'react'
import './BoxContainer.css'
import Box from './Box'
import { rgbValue, generateColors } from './helpers'
  
class BoxContainer extends Component{
  
  // Number of color boxes want shows by default
  static defaultProps = {
    num : 18
  }
  constructor(props){
    super(props)
    this.state = {
      
      // Color state contains array of rgb color values
      colors : generateColors(this.props.num)
    }
    this.changeColor = this.changeColor.bind(this)
  }
  
  changeColor(c){
    
    // Create new random rgb color
    let newColor
    do{
      newColor = `rgb(
        ${rgbValue()},
        ${rgbValue()},
        ${rgbValue()}
      )`
        
    // If new rgb color is equal to previous 
    // color of the box then again create new 
    // rgb color value
    }while(newColor === c)
  
    // Change colors array state by inserting 
    // new color value in place of previous color
    this.setState(st => ({
      colors : st.colors.map(color => {
        if(color !== c) return color
        return newColor
      })
    }))
  }
  
  render(){ 
    return(
      <React.Fragment>
        <h4>Find The Vowels<span className="vertical">Find The Vowels</span><span className="vertical">Find The Vowels</span></h4>
        <h5>Random RGB Color Generator<span style={{fontSize: 30}}><b>  &#9759;</b></span> Please Click!</h5>
        <div className='BoxContainer'>
          {this.state.colors.map(color => (
            
            // For each color make a box component
            <Box color={color} changeColor={this.changeColor} key={color}/>
          ))}
        </div>
      
        <div className="wrapper_4">

          <div className="v_one">
            <pre>{`
            
              const findVowels = str => {
                let count = 0
                const vowels = ['a', 'e', 'i', 'o', 'u']
                for(let char of str.toLowerCase()) {
                  if(vowels.includes(char)) {
                    count++
                  }
                }
                return count
              }

              console.log(findVowels('apple')); //2

            `}</pre>
          </div>

          <div className="v_two">
            <pre>{`

              const findVowels = str => {
                const matched = str.match(/[aeiou]/gi)
                return matched ? matched.length : 0
              }
              
              console.log(findVowels("pineapple"));  //4
          
            `}</pre>
          </div>
        </div>
      </React.Fragment>
    )
  }
}
  
export default BoxContainer;