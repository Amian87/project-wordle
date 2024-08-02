import React from 'react';

function GuessResult({guesses}){

return <>
  <div className="guess-results">
    {guesses.map((({value, id}) =>
      <p key={id}>{value}</p>)
    )}
  </div>
</>

}

export default GuessResult;
