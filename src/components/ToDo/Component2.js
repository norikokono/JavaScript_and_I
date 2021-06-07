// For class-based component.

import React from 'react';
  
const Component2 = (props) => {
    return (
        <div className="main-component-container">
            <h5>Component 2</h5>              
                <p>{props.data}</p> 
        </div>
    )
}
  
export default Component2;



//////////////////////////////////////////////////

// For Function-based component.
// Second Component
// import React from 'react';
// import './Component2.css'
  
// export default function Component2(props) {
//     return (
//         <div className="main-container">
//             <h2>Compnent2</h2> 
              
// <p>{props.data} </p>
  
//         </div>
//     )
// }