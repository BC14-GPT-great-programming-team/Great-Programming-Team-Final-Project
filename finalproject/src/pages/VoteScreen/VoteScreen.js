import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function VoteScreen({ rounds, setRounds, roundCount, venueData }) {
  // currentRound is an array of objects that represent the options for the current round
  const currentRound = rounds[roundCount];
  // selectedOption is the id of the option that the user has selected
  const [selectedOption, setSelectedOption] = useState(null);
  // isNextDisabled is a boolean that determines whether the Next button is disabled
  const [isNextDisabled, setIsNextDisabled] = useState(true);
  venueData && console.log(venueData);

  // in handleVote we take in the id of the option that the user has selected
  // if the option is already selected, we deselect it
  // if the option is not selected, we select it
  // we also update the score of the option
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

  // updateOptionScore takes in the id of the option that we want to update the score of
  // and the increment that we want to update the score by
  // it updates the score of the option in the rounds array
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
      {/* so the below button-map maps through the currentRound Array and renders a button for each of the option objects inside that array.
      The button that is selected turns purple and the text turns white when clicked(currently) The button also triggers the handleVote function which takes in an argument of the id from the object that it is currently mapping*/}
      {currentRound.map((option) => (
        <button
          key={option.id}
          onClick={() => handleVote(option.id)}
          disabled={option.disabled || (isOptionSelected && option.id !== selectedOption)}
          style={{
            color: selectedOption === option.id ? "white" : "",
            backgroundColor: selectedOption === option.id ? "blueviolet" : "",
            opacity: selectedOption && selectedOption !== option.id ? 0.5 : 1,
          }}
        >
          {option.name}
        </button>
      ))}

      {/* The below button is disabled until an option is selected and will link to the results page*/}
      <Link to="/results">
        <button disabled={isNextDisabled}>Next</button>
      </Link>
    </div>
  );
}
