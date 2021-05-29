import React, { Component } from 'react'  
// import Clock from 'react-live-clock';  
import './ClockDemo.css';  

export class ClockLiveDemo extends Component {   
  render() {  
      return (  
          <div>   
            <body class="clock">
                <div className="clk">  
                  {/* <Clock format={"HH:mm:ss"} interval={1000} ticking={true} />  */}
                </div>  

                <div class="rotate">
                  <h2 style={{fontSize: 50}}>Anagram</h2>
                </div>
             {/* eslint-disable no-useless-escape */}    
            <div class="wrapper_5">
                <div class="c_one">
                  <pre>{`
                  
    const buildCharObject = str => {
      const charObj = {}
      for(let char of str.replace(/[^\w]/g).toLowerCase()) {
        
        charObj[char] = charObj[char] + 1 || 1
      }
      return charObj
    }

    const anagram = (strA, strB) => {
      const aCharObject = buildCharObject(strA)
      const bCharObject = buildCharObject(strB)

      if(Object.keys(aCharObject).length !== Object.keys(bCharObject).length) {
        return false
      }
      for(let char in aCharObject) {
        if(aCharObject[char] !== bCharObject[char]) {
          return false
        }
      }
      
      return true
    }

    console.log(anagram("Friend", "finder"))  //true
    
                  `}</pre>
                </div>
                <div class="c_two">
                  <pre>{`
                                    
      const isAnagram = (str1, str2) => {
        const normalize = str =>
          str
            .toLowerCase()
            .replace(/[^a-z0-9]/gi, '')
            .split('')
            .sort()
            .join('');
        return normalize(str1) === normalize(str2);
      };
      console.log(isAnagram('Iceman', 'cinema')); 
      console.log(isAnagram('elbow', 'Below'));
              
                    `}</pre>
                </div>
              </div>
            </body>
          </div>  
    )  
  }  
}  
  
export default ClockLiveDemo  