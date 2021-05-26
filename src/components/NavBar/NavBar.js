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
        <li style={{paddingTop: 30}}><Link to="/">Home</Link></li>
        <li><Link to="/fizz_buzz">Fizz Buzz</Link></li>
        <li><Link to="/palindrome">Palindrome</Link></li>
        <li><Link to="/fibonacci_sequence">Fibonacci Sequence</Link></li>
        <li><Link to="/find_the_vowels">Find The Vowels</Link></li>
        <li><Link to="/clock">Anagram</Link></li>
        <li><Link to="/roll_dice">Math.random()</Link></li>
        <li><Link to="./dark_mode">Dark Mode</Link></li>
        <li><Link to="/todo">To Do</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}
 
export default Navbar;

