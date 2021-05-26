import React from 'react';
import './Palindrome.css';

const Palindrome = () => {
  
    return (
    <React.Fragment>
      <br />
      <h1 class="text_shadow">Palindrome</h1>
        <iframe title="computer-gif" src="https://giphy.com/embed/l0HlNaQ6gWfllcjDO" width="480" height="360" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
        <p><a href="https://giphy.com/gifs/90s-80s-illustration-l0HlNaQ6gWfllcjDO" style={{color: "grey"}}>via GIPHY</a></p>

      <p class="text_shadow_2" style={{ marginBottom: 0 }}>palindrome('racecar') === true</p>
      <p class="text_shadow_2" style={{ margin : 0, paddingTop: 0}}>palindrome('table') === false</p>

      <div class="wrapper_2">
        <div class="p_one">
            <pre>{`

      const palindrome = (str) => {
        str = str.toLowerCase();
        return str === str.split("").reverse().join("");
      };

      console.log(palindrome("Civic"));  
      
        // true
           
           `}</pre>
        </div>

        {/* \W removes all non-alphanumeric characters. the g flag for global search*/}
        {/* eslint-disable no-useless-escape */}
        <div class="p_two">
            <pre>{`

      function isPalindrome(str) {
        str = str.replace(/\W/g, '').toLowerCase();
        return (str == str.split('').reverse().join(''));
      }

      console.log(isPalindrome("level"));    // true

      console.log(isPalindrome("levels"));   // false

      console.log(isPalindrome("A car, a man, a maraca"));   

        // true
                    
           `}</pre>
        </div>
        
        {/* eslint-disable no-useless-escape */}
        <div class="p_three">
          <pre>{`

  function palindrome(str) {
    const re = /[\W_]/g;
    const lowRegStr = str.toLowerCase().replace(re, '');
    const reverseStr = lowRegStr.split('').reverse().join(''); 
    return reverseStr === lowRegStr;
  }

  console.log(palindrome("A man, a plan, a canal. Panama"));

    //true
              
           `}</pre>
          </div>

          {/* /[^A-Za-z0-9]/g; or const re = /[\W_]/g; removes all non-alphanumeric characters, the g flag for global search */}
          <div class="p_four">
            <pre>{`

          function palindrome(str) {
            const re = /[^A-Za-z0-9]/g;
            str = str.toLowerCase().replace(re, '');
            const len = str.length;
            for (let i = 0; i < len/2; i++) {
              if (str[i] !== str[len - 1 - i]) {
                  return false;
              }
            }
            return true;
            }

            console.log(palindrome("No lemon, no melon")); 
            
              //true
              
           `}</pre>

        </div>

        <div class="p_five">
            <pre>{`

    function canRearrangeToPalindrome(str)
    {
        let letterCounts = {};
        let letter;
        let palindromeSum = 0;
        for (let i = 0; i < str.length; i++) {
            letter = str[i];
            letterCounts[letter] = letterCounts[letter] || 0;
            letterCounts[letter]++;
        }
        for (let letterCount in letterCounts) {
            palindromeSum += letterCounts[letterCount] % 2;
        }
    
        return palindromeSum < 2;
    }
    
    console.log(canRearrangeToPalindrome("aabbcc"));  

      //true
             
           `}</pre>

        </div>

        <div class="p_six">
          <pre>{`
          
      function palindromeRearranging(inputString){
        const charArray = inputString.split("");
        const letterObject = {};
      
        for(let i = 0; i < charArray.length;i++){
            if(!letterObject.hasOwnProperty(charArray[i])){
              letterObject[charArray[i]] = 1;
            }else{
              letterObject[charArray[i]]++;
      
            }
        }
        var oddCount = 0;
        for(val in letterObject){
          if(letterObject[val] % 2 != 0){
            oddCount++;
          }
        }
        return oddCount > 1 ? false :true;
        }
      
          console.log(palindromeRearranging("aabbcc") );  
          
          //true
      
          `}</pre>
        </div>
      </div>
    </React.Fragment>
    );
}
 
export default Palindrome