import React from 'react';
import {Link} from 'react-router-dom';

export default function Results({handleNextRound, rounds}){

const voteResults = rounds.map((round) => {
  return round.map((option) => {
   if (option.score === 1) {
    return option.name;
  } else {
    return null;
  }
  });
});


  return (
    <div>
    <div>
      <h1>Results Page</h1>
      <h1>{voteResults}</h1>
      <p>Results will go here</p>
    </div>
    <Link to="/">
        <button onClick={handleNextRound}>Next</button>
    </Link>
    </div>
  )
};