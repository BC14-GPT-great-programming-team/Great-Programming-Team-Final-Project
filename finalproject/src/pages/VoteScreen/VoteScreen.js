import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function VoteScreen({ rounds, setRounds, roundCount }) {
  const currentRound = rounds[roundCount];
  const [selectedOption, setSelectedOption] = useState(null);
  const [isNextDisabled, setIsNextDisabled] = useState(true);

  function handleVote(optionid) {
    if (selectedOption === optionid) {
      // Deselect the option
      setSelectedOption(null);
      setIsNextDisabled(true);
      updateOptionScore(optionid, -1);
    } else {
      // Select the option
      setSelectedOption(optionid);
      setIsNextDisabled(false);
      updateOptionScore(optionid, 1);
    }
  }

  function updateOptionScore(optionid, increment) {
    const updatedRounds = rounds.map((round) => {
      return round.map((option) => {
        if (option.id === optionid) {
          return {
            ...option,
            score: option.score + increment,
          };
        } else {
          return option;
        }
      });
    });
    setRounds(updatedRounds);
  }

  const isOptionSelected = selectedOption !== null;
  return (
    <div>
      <h1>Voting Page</h1>
      {currentRound.map((option) => (
        <button
          key={option.id}
          onClick={() => handleVote(option.id)}
          disabled={option.disabled || (isOptionSelected && option.id !== selectedOption)}
          style={{
            backgroundColor: selectedOption === option.id ? "darkpurple" : "",
            opacity: selectedOption && selectedOption !== option.id ? 0.5 : 1,
          }}
        >
          {option.name}
        </button>
      ))}
      <Link to="/results">
        <button disabled={isNextDisabled}>Next</button>
      </Link>
    </div>
  );
}
