import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./VoteScreen.css";
import PreFilterSVG from "../PreFilterPage/PreFilterSVGGreen";

export default function VoteScreen({
  rounds,
  setRounds,
  roundCount,
  venueData,
  setFilter,
  filters,
  setVoteResults,
  currentResults,
}) {
  // currentRound is an array of objects that represent the options for the current round
  const currentRound = rounds[roundCount];
  // selectedOption is the id of the option that the user has selected
  const [selectedOption, setSelectedOption] = useState(null);
  // isNextDisabled is a boolean that determines whether the Next button is disabled
  const [isNextDisabled, setIsNextDisabled] = useState(true);
  venueData && console.log(venueData);

  // in handleVote we take in the id of the option that the user has selected and the name of the option that the user has selected
  function handleVote(optionid, optionname, roundLabel) {
    if (selectedOption === optionid) {
      // Deselect the option
      setFilter(roundLabel, null);
      setSelectedOption(null);
      setIsNextDisabled(true);
      updateOptionScore(optionid, -1);
      console.log(filters);
    } else {
      // Select the option
      setFilter(roundLabel, optionname);
      setSelectedOption(optionid);
      setIsNextDisabled(false);
      updateOptionScore(optionid, 1);
      console.log(filters);
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

  //this is triggered by the Next button and sets the voteResults state to the currentResults state which is an array of objects that represent the options for the current round
  function handleVoteResult() {
    setVoteResults(currentResults);
  }

  const isOptionSelected = selectedOption !== null;
  return (
    <div className="voteScreen">
      <h1>Voting Page</h1>
      {/* The below button-map maps through the currentRound Array and renders a button for each of the option objects inside that array.
      */}
      {currentRound.map((option) => (
        <button
          key={option.id}
          onClick={() => handleVote(option.id, option.name, option.roundLabel)}
          disabled={
            option.disabled ||
            (isOptionSelected && option.id !== selectedOption)
          }
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
        <button
          className="nextBtn"
          onClick={handleVoteResult}
          disabled={isNextDisabled}
          style={{
            backgroundColor: isNextDisabled ? "#ea9c90" : "#BFC995",
          }}
        >
          Next
        </button>
      </Link>
      <PreFilterSVG />
    </div>
  );
}
