import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Fragment } from 'react';
 
import HomePage from './components/HomePage/HomePage';
import FizzBuzz from './components/FizzBuzz/FizzBuzz';
import Palindrome from './components/Palindrome/Palindrome';
import FibonacciSequence from './components/FibonacciSequence/FibonacciSequence';
import BoxContainer from './components/FindTheVowels/BoxContainer';
import ClockDemo from './components/Anagram/ClockDemo';
import MemoryGame from './components/MemoryGame/MemoryGame';
import RollDice from './components/RollDice/RollDice';
import DarkMode from './components/DarkMode/DarkMode';
import CatImageGenerator from './components/Image/CatImageGenerator';
import MealSearch from './components/MealSearch/MealSearch';
// import WorldMap from './components/WorldMap/WorldMap';
import DisplayAllPosts from './components/Blog/DisplayAllPosts';
import ToDo from './components/ToDo/ToDo';
import QuotesGenerator from './components/QuotesGenerator/QuotesGenerator';
import PhotoEditor from './components/PhotoEditor/PhotoEditor';
import DarkMode2 from './components/DarkMode2/DarkMode2';
import NoPageFound from './components/NoPageFound';
import NavBar from './components/NavBar/NavBar';
import ScrollButton from './components/ScrollButton/ScrollButton';
import { Content } from './components/ScrollButton/Styles';


 
class App extends Component {
  render() {
    return (      
       <BrowserRouter>
        <React.Fragment>
          <NavBar />
            <Switch>
              <Route path="/" component={HomePage} exact/>
              <Route path="/fizz_buzz" component={FizzBuzz}/> 
              <Route path="/palindrome" component={Palindrome}/> 
              <Route path="/fibonacci_sequence" component={FibonacciSequence}/>
              <Route path="/find_the_vowels" component={BoxContainer}/>
              <Route path="/clock" component={ClockDemo}/> 
              <Route path="/memory_game" component={MemoryGame}/>
              <Route path="/roll_dice" component={RollDice}/> 
              <Route path="/dark_mode" component={DarkMode}/> 
              <Route path="/image_generator" component={CatImageGenerator}/>
              <Route path="/meal_search" component={MealSearch}/>
              {/* <Route path="/world_map" component={WorldMap}/> */}
              <Route path="/blog" component={DisplayAllPosts}/>
              <Route path="/todo" component={ToDo}/>
              <Route path="/quotes_generator" component={QuotesGenerator}/>
              <Route path="/photo_editor" component={PhotoEditor}/>
              <Route path="/dark_mode_2" component={DarkMode2}/>
              <Route component={NoPageFound}/>
           </Switch>
           <Fragment>
            <Content />
            <ScrollButton />
          </Fragment>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}


export default App;


