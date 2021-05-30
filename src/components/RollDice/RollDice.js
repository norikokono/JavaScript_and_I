// https://www.geeksforgeeks.org/how-to-create-a-dice-rolling-app-using-reactjs/

import React, { Component } from 'react'
import './RollDice.css'
import Die from './Die'

import GuessTheNumber from './GuessTheNumber';
import CalculatorApp from './CalculatorApp';
  
class RollDice extends Component{
  
  // Face numbers passes as default props
  static defaultProps = {
    sides : ['one', 'two', 'three', 
             'four', 'five', 'six']
  }
  constructor(props){
    super(props)
      
    // States
    this.state = {
      die1 : 'one',
      die2 : 'one',
      rolling: false
    }
    this.roll = this.roll.bind(this)
  }
  roll(){
    const {sides} = this.props
    this.setState({
      
      // Changing state upon click
      die1 : sides[Math.floor(Math.random() * sides.length)],
      die2 : sides[Math.floor(Math.random() * sides.length)],
      rolling:true
    })
      
    // Start timer of one sec when rolling start
    setTimeout(() => {
      
      // Set rolling to false again when time over
      this.setState({rolling:false})
    },1000)
  }
  
  render(){
    const handleBtn = this.state.rolling ? 
                      'RollDice-rolling' : ''
    const {die1, die2, rolling} = this.state
    return(
      <div className="dice_body">
        <h2 style={{marginTop: 40, color: "Aqua"}}>Math.random()</h2>
        <div className='RollDice'>
          <div className='RollDice-container'>
            <Die face={die1} rolling={rolling}/>
            <Die face={die2} rolling={rolling}/>
          </div>
          <button className={handleBtn}
                  disabled={this.state.rolling} 
                  onClick={this.roll}>
            {this.state.rolling ? 'Rolling' : 'Roll Dice!'}
          </button>
          <GuessTheNumber/>
          <CalculatorApp />
        </div>
          <div className="wrapper_6">
            <div className="r_one">
              <pre>{`

  // Original JavaScript code by Chirp Internet: chirpinternet.eu
  // Please acknowledge use of this code by including this header.

  function rollDie(sides)
  {
    if(!sides) sides = 6;
    with(Math) return 1 + floor(random() * sides);
  }

  function rollDice(number, sides)
  {
    var total = 0;
    while(number-- > 0) total += rollDie(sides);
    return total;
  }

  var rand = rollDie();	        
  var rand = rollDie(6);	
  var rand = rollDie(20);	
  var rand = rollDice(3);	
  var rand = rollDice(3, 6);	
  var rand = rollDice(2, 12);	

  console.log(rand);

              `}</pre>
            </div>
            <div className="r_two">
              <pre>{`

    const generateRandomNumber = (min, max) =>  {
    return Math.floor(Math.random() * (max - min) + min);
      };
    console.log(generateRandomNumber(100, 200));
    
              `}</pre>
            </div>
          </div>
      </div>
    )
  }
}
  
export default RollDice