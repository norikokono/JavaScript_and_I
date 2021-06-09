import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  return (
    <nav className={sidebar ? "sidebar active" : "sidebar"}>
      <button className="hamburger" type="button" onClick={showSidebar}>
        <div></div>
      </button>
      <ul onClick={showSidebar}>
        <li style={{paddingTop: 10}}><Link to="/">Home</Link></li>
        <li><Link to="/fizz_buzz">Fizz Buzz</Link></li>
        <li><Link to="/palindrome">Palindrome</Link></li>
        <li><Link to="/fibonacci_sequence">Fibonacci Sequence</Link></li>
        <li><Link to="/find_the_vowels">Find The Vowels</Link></li>
        <li><Link to="/clock">Anagram</Link></li>
        <li><Link to="/dark_mode">Pyramid</Link></li>
        <li><Link to="/roll_dice">Math.random()</Link></li>
        <li><Link to="/memory_game">Memory Game</Link></li>
        <li><Link to="/image_generator">Image Generator</Link></li>
        <li><Link to="/meal_search">Meal Search</Link></li>     
        {/* <li><Link to="/world_map">WorldMap</Link></li> */}
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/todo">To Do</Link></li>
        <li><Link to="/dark_mode_2">Dark Mode</Link></li>
        <li><Link to="/quotes_generator">Quotes Generator</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}
 
export default Navbar;
