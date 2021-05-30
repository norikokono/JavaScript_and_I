// https://www.code-boost.com/dark-mode-in-react/

import React from "react";
import "./DarkMode.css";

const DarkMode = () => {
  const [darkMode, setDarkMode] = React.useState(false);

  React.useEffect(() => {
    const json = localStorage.getItem("site-dark-mode");
    const currentMode = JSON.parse(json);
    if (currentMode) {
      setDarkMode(true);
    } else {
      setDarkMode(false);
    }
  }, []);

  React.useEffect(() => {
    
    if (darkMode) {
      document.getElementById("dark_mode").classList.add("dark");
    } else {
      document.getElementById("dark_mode").classList.remove("dark");
    }
    const json = JSON.stringify(darkMode);
    localStorage.setItem("site-dark-mode", json);
  }, [darkMode]);

  return (
    <div id="dark_mode">
      <div>
        <h2 className="dark_h2">Pyramid</h2>
        <h4>Toggle Dark Mode</h4>
        <button onClick={() => setDarkMode(!darkMode)} className="dark_mode_button">Please Click!</button>
      </div>
      <div className="wrapper_7">
        <div className="d_one">
          <pre>{`
    
      function pyramid(n) {
        for (let i = 1; i <= n; i++) {
            console.log(" ".repeat(n-i) + "*  ".repeat(i))
        }    
      }
      pyramid(5)

          *  
         *  *  
        *  *  *  
       *  *  *  *  
      *  *  *  *  *  

          `}</pre>
        </div>
        <div className="d_two">
          <pre>{`

            function createHalfPyramid (height) {

              for (var i = 1; i <= height; i++) {
                var row = '';
            
                for (var j = 1; j <= i; j++) {
                  row += '*' + ' ';
                }
            
                console.log(row);
              }
            }
            
            createHalfPyramid(5);

                * 
                * * 
                * * * 
                * * * * 
                * * * * * 
            
          `}</pre>
        </div>
        <div className="d_three">
          <pre>{`

        function createHalfPyramid (height) {
          
          for (var i = 1; i <= height; i++) {
            var row = '';
            
            for (var j = 1; j <= (height - i); j++) {
              row += ' ';
            }
            
            for (var k = 1; k <= i; k++) {
              row += '*';
            }
            
            console.log(row);
          }
        }

        createHalfPyramid(5);

                *
               **
              ***
             ****
            *****

          `}</pre>
        </div>
        <div className="d_four">
          <pre>{`

        function createHalfPyramid (height) {

          for (var i = 1; i <= height; i++) {
            var row = '';
            
            for (var j = 1; j <= (height - i + 1); j++) {
              row += '*' + ' ';
            }
                
            console.log(row);
          }
        }
        
        createHalfPyramid(5);

            * * * * * 
            * * * * 
            * * * 
            * * 
            * 

          `}</pre>
        </div>
      </div>
    </div>
  );
};

export default DarkMode;