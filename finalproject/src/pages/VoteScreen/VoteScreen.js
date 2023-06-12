
import React from 'react';

// george and robertos work
//PLAN:
//import react and react router DONE!!
//create function that returns JSX DONE!!
//   return:
//        selection choices component

//logic to update score variable when button is selected?DONE!!
// pass selection choices props down
//

export default function VoteScreen({ rounds, setRounds, history  }){
    const currentRound = rounds[0];
  
    const handleVote = (id) => {
      setRounds((prevRounds) =>
        prevRounds.map((round, index) => {
          if (index === 0) {
            return round.map((option) => {
              if (option.id === id) {
                if (option.score === 0) {
                  return { ...option, score: 3 };
                } else if (option.score === 3) {
                  return { ...option, score: 2 };
                } else if (option.score === 2) {
                  return { ...option, score: 1 };
                }
              }
              return option;
            });
          }
          return round;
        })
      );
    };
  
    const handleNext = () => {
      history.push('/results');
    };
  
    return (
      <div>
        <h1>Voting Page</h1>
        {currentRound.map((option) => (
          <button key={option.id} onClick={() => handleVote(option.id)}>
            {option.name}
          </button>
        ))}
        <button onClick={handleNext}>Next</button>
      </div>
    );
  };
  