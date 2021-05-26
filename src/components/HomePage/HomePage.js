import React from 'react';
import './HomePage.css';
import './script_1.js';

const HomePage = () => {
    return (
    <React.Fragment>
        <br />
        <h1><span role="img" aria-label="growing heart">&#128151;</span><span style={{fontSize: 30}}> & </span>
        <span role="img" aria-label="Face with Symbols on Mouth">&#129324;</span>&nbsp;<span class="two_color_text">JavaScript and I</span></h1>
        <p><span style={{color:"DarkTurquoise"}}>I am struggling with JavaScript,</span>
        <span style={{color: "Orange"}}> so I am making this as my practice purpose.<span class="heavy heart" style={{fontSize: 15}}>&#10084;</span></span></p>

        <div id='container'>
            <script type='text.jsx' src="script_1.js" async></script>
        </div> 
    </React.Fragment>

    );
}
 


export default HomePage;