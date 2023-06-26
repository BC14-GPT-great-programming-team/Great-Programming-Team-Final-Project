import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./VoteScreen.css";
import PreFilterSVG from "../../Components/BackgroundSVG/PreFilterSVGGreen";

export default function VoteScreen({
  rounds,
  setRounds,
  setFilter,
  currentRound,
  selectedOption,
  setSelectedOption,
  setCurrentResult,
  setTheCurrentResult,
  currentResult,
  currentRoundID,
  venueData
}) {
  const navigate = useNavigate();

  // isNextDisabled is a boolean that determines whether the Next button is disabled
  const [isNextDisabled, setIsNextDisabled] = useState(true);

  // in handleVote we take in the id of the option that the user has selected and the name of the option that the user has selected
  function handleVote(optionid, optionname, roundLabel) {
    if (selectedOption === optionid) {
      // Deselect the option
      setFilter(roundLabel, null);
      setSelectedOption(null);
      setIsNextDisabled(true);
      updateOptionScore(optionid, -1);
      setCurrentResult(null);
    } else {
      // Select the option
      setFilter(roundLabel, optionname);
      setSelectedOption(optionid);
      setIsNextDisabled(false);
      updateOptionScore(optionid, 1);
      setCurrentResult(optionname);
    }
  }

  // updateOptionScore takes in the id of the option that we want to update the score of
  // and the increment that we want to update the score by (either 1 or -1)
  function updateOptionScore(optionid, increment) {
    const updatedRounds = { ...rounds }; // Create a shallow copy of the rounds object
    // Loop through each round in the updatedRounds object
    Object.keys(updatedRounds).forEach((roundKey) => {
      updatedRounds[roundKey] = updatedRounds[roundKey].map((option) => {
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

  //this is triggered by the Next button on the vote screen and navigates to the results page and sets the current result state to the current result. This is then passed down to the results page and displayed.
  function handleVoteResult() {
    setTheCurrentResult(currentResult);
    navigate("/results");
  }

  const isOptionSelected = selectedOption !== null;
  return (
    <div className="voteScreen">
      <h1>Pick {currentRoundID}</h1>
      <br></br>
      {/* The below button-map maps through the currentRound Array and renders a button for each of the option objects inside that array.
       */}
      {currentRound &&
        currentRound.map((option) => {
          const count = venueData.reduce((acc, obj) => {
          if (obj[option.roundLabel] === option.name) {
            return acc + 1;
          } 
          return acc;
        }, 0);

        return (
          <button
            key={option.id}
            onClick={() =>
              handleVote(option.id, option.name, option.roundLabel)
            }
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
            {option.name} ({count})
          </button>
        );
        })}

      {/* The below button is disabled until an option is selected and will link to the results page*/}

      <button
        className="nextBtn"
        onClick={handleVoteResult}
        disabled={isNextDisabled}
        style={{
          backgroundColor: isNextDisabled ? "#ea9c90" : "#969f79",
        }}
      >
        Next
      </button>

      <PreFilterSVG />
    </div>
  );
}
