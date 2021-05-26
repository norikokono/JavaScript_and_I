// import { NULL } from 'node-sass';
import React from 'react'
  
const NumberResult = ({ term , secretNum }) => {
  let numberResult;
  if(term){
    if(secretNum > term){
      numberResult = 'You guessed Lower'
    }
    else if(secretNum < term){
      numberResult = 'You guessed Higher'
    }
    /* https://stackoverflow.com/questions/55788015/isnan-and-typeof-not-working-with-react
    You likely want to use !isNaN(whateverVariable) here. Not not a number is a number. – AryanJ-NYC */
    else if(!isNaN(secretNum)) {
      numberResult = 'Please enter the number'
    }
    else{
      numberResult = 'Yippee, guessed it!'
    }
  }
  return <h3>{numberResult}</h3>
}
  
export default NumberResult