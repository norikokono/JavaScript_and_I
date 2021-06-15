import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  // https://material-ui.com/components/menus/
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  

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
        <li><Link to="/todo">To Do</Link></li>
          <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} id="simple_menu">
            Blog
          </Button>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}><Link to="/blog" className="nav_link" >Blog</Link></MenuItem>
            <MenuItem onClick={handleClose}><Link to="/quotes_generator" className="nav_link">Quotes Generator</Link></MenuItem>
            <MenuItem onClick={handleClose}><Link to="/photo_editor" className="nav_link">Photo Editor</Link></MenuItem>
            <MenuItem onClick={handleClose}><Link to="/dark_mode_2" className="nav_link">Dark Mode</Link></MenuItem>
          </Menu>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}
 
export default Navbar;
