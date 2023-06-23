import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./GroupVoteScreen.css";
import PreFilterSVG from "../../Components/BackgroundSVG/PreFilterSVGGreen";

export default function GroupVoteScreen({
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
  userid,
  groupid,
  serverURL
}) {
  const navigate = useNavigate();
  
  // isNextDisabled is a boolean that determines whether the Next button is disabled
  const [isNextDisabled, setIsNextDisabled] = useState(true);
 
  // in handleVote we take in the id of the option that the user has selected and the name of the option that the user has selected
  function handleVote(optionid, optionname) {
    if (selectedOption === optionid) {
      // Deselect the option
      setCurrentResult(null);
      setSelectedOption(null);
      setIsNextDisabled(true);
      updateOptionScore(optionid, -1);
    } else {
      // Select the option
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

  //this is triggered by the Next button and sets the voteResults state to the currentResults state which is an array of objects that represent the options for the current round
  function handleVoteResult() {
    setTheCurrentResult(currentResult);
    const userRequestBody = {
      type: "castVote",
      user_id: userid,
      group_id: groupid,
      vote_stage: currentRoundID,
      vote_rank: 1,
      vote_choice: currentResult,
      round_label: currentRound[0].roundLabel,
    };
    fetch(serverURL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userRequestBody),
    }) 
    .then((response) => response.json())
    .then((data) => {
      console.log(`this is the response ${data.message}`)
    
      navigate("/groupresults");
    });}

  const isOptionSelected = selectedOption !== null;
  
  return (
    <div className="voteScreen">
      <h1>Pick {currentRoundID}</h1>
      {/* The below button-map maps through the currentRound Array and renders a button for each of the option objects inside that array.
      */}
      {currentRound && currentRound.map((option) => (
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
      
      <PreFilterSVG />
    </div>
  );
}
