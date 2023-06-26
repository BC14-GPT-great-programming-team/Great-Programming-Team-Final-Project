import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./GroupResults.css";
import HomeButton from "../../Components/HomeButton/HomeButton";

export default function Results({ handleNextGroupRound, serverURL, groupid, currentRoundID, setCurrentGroupResult, CurrentGroupResult, setCurrentRoundLabel, setGroupFilter, groupUsernames}) {

  const [isNextBtnDisabled, setIsNextBtnDisabled] = useState(true);
// this useEffect is for fetching the votes from the database
    useEffect(() => {
        const fetchVotes = () => {
          const groupUsernamesRequestBody = {
            type: "getVotes", 
            group_id: groupid,
            vote_stage: currentRoundID,
          };
    
          fetch(serverURL, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(groupUsernamesRequestBody),
          })
          .then((response) => response.json())
          .then((data) => {
            let roundLabel = data.roundlabel
             let resultArray = data.resultArray
             let resultArraySorted = resultArray && resultArray.sort((a, b) => b.votes - a.votes)
           if (roundLabel) {setCurrentRoundLabel(roundLabel)}
           if (resultArraySorted) {setCurrentGroupResult(resultArraySorted)}
           if (roundLabel !== undefined && resultArraySorted !== undefined) {setGroupFilter(roundLabel, resultArraySorted[0].choice)}
        
          //  console.log(`this is roundLabel:`)
          // console.log(roundLabel)
           console.log(`this is CurrentGroupResult:`)
          console.log(CurrentGroupResult)
          // console.log(`this is resultArraySorted:`)
          // console.log(resultArraySorted)
        
          });
        };
        fetchVotes();
       
        const interval = setInterval(fetchVotes, 2000);
    
        return () => clearInterval(interval);
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [])

      useEffect(() => {
        console.log("this is CurrentGroupResult:");
        console.log(CurrentGroupResult);
      
        if (
          CurrentGroupResult &&
          groupUsernames &&
          CurrentGroupResult.length !== undefined &&
          CurrentGroupResult.length !== groupUsernames.length
        ) {
          setIsNextBtnDisabled(true);
        } else {
          setIsNextBtnDisabled(false);
        }
      }, [CurrentGroupResult, groupUsernames]);
      
  return (
    <div className="resultsPage">
      <Link to="/">
        <HomeButton />
      </Link>

      <div className="wavy">
        <h2>
        <span style={{"--i": 1 }}>Y</span>
        <span style={{"--i": 2 }}>o</span>
        <span style={{"--i": 3 }}>u</span>
        <br></br>
        <span style={{"--i": 4 }}>h</span>
        <span style={{"--i": 5 }}>a</span>
        <span style={{"--i": 6 }}>v</span>
        <span style={{"--i": 7} }>e</span>
        <br></br>
        <span style={{"--i": 8 }}>c</span>
        <span style={{"--i": 9 }}>h</span>
        <span style={{"--i": 10 }}>o</span>
        <span style={{"--i": 11 }}>s</span>
        <span style={{"--i": 12 }}>e</span>
        <span style={{"--i": 13 }}>n</span>
        <span style={{"--i": 14 }}>:</span>
        </h2>
        {CurrentGroupResult && CurrentGroupResult.length > 0 ? (
          <>
            <h2>{CurrentGroupResult[0].choice}</h2>
                {CurrentGroupResult.map((result) => (
                  <h2>{result.choice}: {result.votes}</h2>
                  ))}
                  </>
        ) : (
          <h2>Waiting for votes...</h2>
        )}


      </div>
      
      <button className="nextBtn" onClick={handleNextGroupRound} disabled={isNextBtnDisabled} style={{ backgroundColor: isNextBtnDisabled ? "#e9d1ce" :"#ea9c90"}}>
        Next
      </button>
    </div>
  );
}
