// https://medium.com/nerd-for-tech/tutorial-intro-to-react-hooks-417e4ea3ff33

import React, { useEffect, useState } from 'react';

export default function Hangman({duration = 120000}) {
    const word = "Hangman".toUpperCase();
    const alphabets = ["A", "B", "C", "D", "E", "F", "G",
        "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R",
        "S", "T", "U", "V", "W", "X", "Y", "Z"];
    const [correctGuesses, setCorrectGuesses] = useState([])
    const [timeUp, setTimeUp] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setTimeUp(true);
        }, duration);

        return () => clearTimeout(timeout);
    }, [])


    const maskedWord = word.split('').map(letter => correctGuesses.includes(letter) ? letter : "_").join(" ");
    return (
        <div style={{color: "gray", paddingBottom: 80}}>
            <h4>Hangman game using React hooks</h4>
            <p>{maskedWord}</p>
            {alphabets.map((alphabet, index) => <button key={index} onClick={() => {
                if (word.includes(alphabet)) {
                    setCorrectGuesses([...correctGuesses, alphabet])
                }
            }} style={{cursor: "pointer", border: "1px solid CadetBlue", color: "CadetBlue"}}>{alphabet}</button>)}
			{timeUp ? 
			<p>Time up!</p> : 
			!maskedWord.includes("_") &&  <p>You won!</p>}
        </div>
    );
}