import React from 'react';
import {Link} from 'react-router-dom';

export default function Results({handleNextRound}){



  return (
    <div>
    <div>
      <h1>Results Page</h1>
      <p>Results will go here</p>
    </div>
    <Link to="/">
        <button onClick={handleNextRound}>Next</button>
    </Link>
    </div>
  )
};