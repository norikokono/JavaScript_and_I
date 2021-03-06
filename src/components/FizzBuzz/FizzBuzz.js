import React from 'react';
import './FizzBuzz.css';


const FizzBuzz = () => {
    return (
        
<div>
        <br />
        <h1 className="glow">FizzBuzz<span role="img" aria-label="tropical drink">🍹</span></h1>
        <div className="wrapper">
        <div className="one">
            <pre>{`

        function fizzBuzz() {
            for (let i = 1; i <= 100; i++){
                if (i % 3 === 0 && i % 5 === 0){
                console.log("fizzbuzz");
                } else if (i % 3 === 0){
                console.log("fizz");
                } else if ( i % 5===0 ){
                console.log("buzz");
                } else {
                console.log(i);
                }
            }
        }
        
        fizzBuzz();
           
           `}</pre>
        </div>

        <div className="two">
            <pre>{`

        const fizz = 3;
        const buzz = 3;
        for ( let i = 1; i <= 100; i++){
            if (i % fizz === 0 && i % 5 === 0){
                console.log("fizzbuzz")
            } else if (i % fizz === 0){
                console.log("fizz");
            } else if (i % buzz === 0){
                console.log("buzz");
            } else {
                console.log(i);
            }
        }

            `}</pre>
        </div>

        <div className="three">
            <pre>{`

        function fizzBuzz(n) {
            for (let i = 1; i <= n; i++) {
            let str = "";
        
            if (i % 3 === 0) str += "fizz"
            if (i % 5 === 0) str += "buzz"
            if (str === "") str = i;
            
            console.log(str);
            }
        }
        
        fizzBuzz(100)

            `}</pre>
        </div>

        <div className="four">
            <pre>{`

            for (let i = 1; i<= 100; i++){
                if (i % 15 === 0) {
                console.log("FizzBuzz");
                } else if (i % 3 === 0){
                console.log("Fizz");
                } else if (i % 3 === 0){
                console.log("Buzz");
                } else {
                console.log(i);
                }
            }

            `}</pre>    
        </div>

        <div className="five">
            <pre>{`

        const fizzBuzz = (num) => {
            for ( let i = 1; i < num; i++) {
            if (i % 3=== 0 && i % 5 === 0){
                console.log("FizzBuzz");
            } else if (i % 3 === 0){
                console.log("Fizz");
            } else if (i % 5 === 0){
                console.log("Buzz");
            } else {
                console.log(i);
            }
            }
        };
        
        fizzBuzz(100);
        
            `}</pre>
        </div>

        <div className="six">
            <pre>{`
            
        for (let i =1; i < 100; i++) {
            let fizz = i % 3 === 0,
                buzz = i % 5 === 0;
            result = fizz ? 
                (buzz ? "FizzBuzz" : "Fizz")
                : buzz ? "Buzz" : i;
            console.log(result);
        }
                
            `}</pre>
        </div>
    </div>

{/* fizzBuzz bubble animation */}
<section className="sticky">
    <div className="bubbles">
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>        
    </div>
</section>
</div>

    );
}


export default FizzBuzz;