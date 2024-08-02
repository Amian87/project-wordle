import React, {useState} from 'react';
import GuessInput from '../GuessInput';
import GuessResult from '../GuessResult';
import { sample } from '../../utils';
import { WORDS } from '../../data';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {

  const [guesses, setGuesses] = useState([]);

  function handleSubmitGuess(tentativeGuess){

      const nextGuess = {
        value: tentativeGuess,
        id: `${tentativeGuess}-${Math.random()}`
      }

      console.log('Received guess', nextGuess);
      setGuesses([...guesses, nextGuess]);

  }

  return <>
    <GuessResult guesses={guesses}/>
    <GuessInput handleSubmitGuess={handleSubmitGuess}/>
  </>;
}

export default Game;
