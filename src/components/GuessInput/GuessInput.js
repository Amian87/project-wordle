import React,  {useState} from 'react';

function GuessInput({handleSubmitGuess}){

  const [tentativeGuess, setTentativeGuess] = useState('');

  function handleSubmit(event){
    event.preventDefault();

    handleSubmitGuess(tentativeGuess);

    setTentativeGuess('');

  }

  return(<>
    <form onSubmit={handleSubmit} className="guess-input-wrapper">
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        required
        minLength={5}
        maxLength={5}
        pattern="[a-zA-Z]{5}"
        title="5 letter word"
        value={tentativeGuess}
        onChange={(event)=> {setTentativeGuess(event.target.value.toUpperCase())}}
        id="guess-input"
        type="text"/>

      <ul>
      </ul>
    </form>
  </>);

}

export default GuessInput;
