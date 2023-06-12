
import React from 'react';
import {Link} from 'react-router-dom';

// george and robertos work
//PLAN:
//import react and react router DONE!!
//create function that returns JSX DONE!!
//   return:
//        selection choices component

//logic to update score variable when button is selected?DONE!!
// pass selection choices props down
//

export default function VoteScreen({ rounds, setRounds, roundCount }){
    const currentRound = rounds[roundCount];
  
  function handleNext(){
    <Link>

    </Link>
  }  
    
  
    return (
      <div>
        <h1>Voting Page</h1>
        {currentRound.map((option) => (
          <button key={option.id}>
            {option.name}
          </button>
        ))}
        <Link to="/results">
            <button>Next</button>
        </Link>
      </div>
    );
  };
  