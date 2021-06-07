// https://github.com/kritika27/quotes-generator-react

import React, { useState, useEffect } from "react";
import "./QuotesGenerator.css"

const url = "https://api.quotable.io/random";

const QuotesGenerator = () => {
  const [quotes, setQuotes] = useState([]);

  //Fetch Quotes from API
  const getQuote = () => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setQuotes(data));
  };

  useEffect(() => {
    getQuote();
  }, []);

  const getNewQuote = () => {
    getQuote();
  };

  const tweetQuote = () => {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quotes.content} - ${quotes.author}`;
    window.open(twitterUrl, "_blank");
  };

  const { content, author } = quotes;
  return (
    <div className="quote_body">
      <div className="box-centerside">
        <div className="text">
          <p>{content}</p>
        </div>
        <div className="author">
          <h5>{author}</h5>
          <div className="button-container">
            <button className="twitter-button" onClick={tweetQuote}>
              <i className="fab fa-twitter"></i>
            </button>
            <button onClick={getNewQuote} className="quote_button">New Quote</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuotesGenerator;