// https://medium.com/developer-circle-kampala/how-to-create-a-simple-search-app-in-react-df3cf55927f5

import React, { Component } from "react";
import "./MealSearch.css";

class Search extends Component {
  state = {
    searchValue: "",
    meals: []
  };

  handleOnChange = event => {
    this.setState({ searchValue: event.target.value });
  };

  handleSearch = () => {
    this.makeApiCall(this.state.searchValue);
  };

  makeApiCall = searchInput => {
    const searchUrl = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInput}`;
    fetch(searchUrl)
      .then(response => {
        return response.json();
      })
      .then(jsonData => {
        this.setState({ meals: jsonData.meals });
      });
  };

  render() {
    return (
      <div id="meal_body">
        <div id="meal_main">
          <h1 className="meal_h1">Welcome to the meal search app</h1>
          <input
            name="text"
            type="text"
            placeholder="Search Meal"
            onChange={event => this.handleOnChange(event)}
            value={this.state.searchValue}
            className="meal_input"
          />
          <button onClick={this.handleSearch} className="meal_button">Search</button>
          {this.state.meals ? (
            <div id="meals-container">
              {this.state.meals.map((meal, index) => (
                <div className="single-meal" key={index}>
                  <h2>{meal.strMeal}</h2>
                  <img src={meal.strMealThumb} alt="meal-thumbnail" />
                </div>
              ))}
            </div>
          ) : (
            <p style={{color: "LightSteelBlue"}}>Try searching for a meal</p>
          )}
        </div>
      </div>
    );
  }
}

export default Search;