import React from "react";
import { Link } from "react-router-dom";

// george and robertos work
//PLAN:
//import react and react router DONE!!
//create function that returns JSX DONE!!
//   return:
//        selection choices component

//logic to update score variable when button is selected?DONE!!
// pass selection choices props down
//

export default function VoteScreen({ rounds, setRounds, roundCount }) {
  const currentRound = rounds[roundCount];

  function handleVote(optionid) {
    //increase score of option with id of optionid  you clicked on by 1
    //find the option with the id of optionid
    //increase the score of that option by 1
    //update the rounds state with the new score

    const updatedRounds = rounds.map((round) => {
      return round.map((option) => {
        if (option.id === optionid) {
          return {
            ...option,
            score: option.score + 1,
          };
        } else {
          return option;
        }
      });
    });
    setRounds(updatedRounds);
  }

  return (
    <div>
      <h1>Voting Page</h1>
      {currentRound.map((option) => (
        <button key={option.id} onClick={() => handleVote(option.id)}>
          {option.name}
        </button>
      ))}
      <Link to="/results">
        <button>Next</button>
      </Link>
    </div>
  );
}
