// https://github.com/kaz-yamada/Card-Match-Game

import React, { useState } from "react";
import { createUseStyles } from "react-jss";

import GameBoard from "./GameBoard";
import Banner from "./Banner";

import { GAME_STATUS } from "./constants_index";

const useStyles = createUseStyles({
  header: {
    textAlign: "center",
  },
  footer: {
    textAlign: "center",
  },
  root: {
    fontFamily: "arial",
  },
});

const MemoryGame = () => {
  const [gameStatus, setGameStatus] = useState(GAME_STATUS.CREATING);
  const [gameResults, setGameResults] = useState({});

  const classes = useStyles();

  const handleStatusUpdate = (newStatus, results) => {
    setGameStatus(newStatus);
    if (newStatus === GAME_STATUS.FINISHED) {
      setGameResults(results);
    }
  };

  return (
    <div className={classes.root}>
      <header className={classes.header}>
        <h1>Card Match Game</h1>
      </header>
      <div>
        <GameBoard gameStatus={gameStatus} onGameUpdate={handleStatusUpdate} />
        {gameStatus === GAME_STATUS.FINISHED && (
          <Banner onReset={handleStatusUpdate} results={gameResults} />
        )}
      </div>
      <footer className={classes.footer}>
        {/* Created by <a href="https://www.kazyamada.com/">Kaz Yamada</a> |{" "} */}
        <a href="https://github.com/kaz-yamada/Card-Match-Game">Source</a>
      </footer>
    </div>
  );
};

export default MemoryGame;
