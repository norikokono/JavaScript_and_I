import React, { Component } from "react";
import './FibonacciSequence.css';

class FibonacciSequence extends Component {
    
    constructor(props) {
        super(props);
        this.sayHello = this.sayHello.bind(this);
      }
  
      sayHello() {
        alert("Hello! 🐚, the current time is: " + new Date());
      }
  
    render() {
        // Numbers list
        const list = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181]

        // Defining our N
        let n = 17;

    
        // Slice function call
        const items = list.slice(0, n).map(i => {
        return <button style={{ margin: 10, color: "turquoise"}}
            type="button" class="btn btn-light" onClick={this.sayHello}>{i}</button>
        })
        
    return (
        <div>
          <br />
          <h1 className="two_color_text">Fibonacci Sequence</h1>
          <iframe title="fibonacci_sequence_gif" src="https://giphy.com/embed/l41JT8peYNw3H7uc8" width="480" height="297" frameBorder="0" class="giphy-embed" allowFullScreen>
          </iframe><p><a href="https://giphy.com/gifs/spiral-retrocollage-golden-ratio-l41JT8peYNw3H7uc8" style={{color: "grey"}}>via GIPHY</a></p>
        
            <div>
                {items}
            </div>
    
            <div className="wrapper_3">
                <div className="f_one">
                    <pre>{`
                
            var fibonacci_series = function (n) 
            {
                if (n===1) 
                {
                return [0, 1];
                } 
                else 
                {
                var s = fibonacci_series(n - 1);
                s.push(s[s.length - 1] + s[s.length - 2]);
                return s;
                }
            };
            
                console.log(fibonacci_series(8));

            // [0,1,1,2,3,5,8,13,21]
                
                    `}</pre>
                </div>
                <div className="f_two">
                    <pre>{`

        // program to generate fibonacci series up to n terms
        // take input from the user
     
     const number = parseInt(prompt('Enter the number of terms: '));
     let n1 = 0, n2 = 1, nextTerm;
    
     console.log('Fibonacci Series:');
    
     for (let i = 1; i <= number; i++) {
         console.log(n1);
         nextTerm = n1 + n2;
         n1 = n2;
         n2 = nextTerm;
     } 
        
        //  Enter the number of terms: 4
            Fibonacci Series:
            0
            1
            1
            2

                    `}</pre>
                </div>

                <div className="f_three">
                    <pre>{`
            
            // program to generate fibonacci series 
               up to a certain number
            // take input from the user

        const number = parseInt(prompt('Enter a positive number: '));
        let n1 = 0, n2 = 1, nextTerm;

        console.log('Fibonacci Series:');
        console.log(n1); // print 0
        console.log(n2); // print 1

        nextTerm = n1 + n2;

        while (nextTerm <= number) {

            // print the next term
            console.log(nextTerm);

            n1 = n2;
            n2 = nextTerm;
            nextTerm = n1 + n2;
        }
                    
            //  Enter a positive number: 5
                Fibonacci Series:
                0
                1
                1
                2
                3
                5
                     
                    `}</pre>     
                </div>

                <div className="f_four">
                    <pre>{`
                    
                function fibonacci(num)
                {
                    let num1=0;
                    let num2=1;
                    let sum;
                    let i=0;
                    for (i = 0; i < num; i++) 
                    {
                        sum=num1+num2;
                        num1=num2;
                        num2=sum;
                    }
                    return num2;
                }
                
                console.log("Fibonacci(5): " + fibonacci(5));
                console.log("Fibonacci(8): " + fibonacci(8));
                
                // Fibonacci(5): 3
                   Fibonacci(8): 13
                
                    `}</pre>
                </div>

                <div class="f_five">
                    <pre>{`
                    
            function fib(n) {
                return n <= 1 ? n : fib(n - 1) + fib(n - 2);
                }
                
                console.log( fib(3) );  // 2
                console.log( fib(7) );  // 13                   
            
                    `}</pre>
                </div>

                <div class="f_six">
                    <pre>{`
                    
            function fib(n) {
                let a = 1;
                let b = 1;
                for (let i = 3; i <= n; i++) {
                    let c = a + b;
                    a = b;
                    b = c;
                }
                return b;
                }
                
                console.log( fib(3) );  // 2
                console.log( fib(7) );  // 13
                console.log( fib(77) );  // 5527939700884757

                    `}</pre>
                </div>
            </div>
        </div>
    )
  }
}
  
export default FibonacciSequence