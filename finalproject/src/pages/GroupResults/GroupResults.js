import { React, useEffect } from "react";
import { Link } from "react-router-dom";
import "./GroupResults.css";
import HomeButton from "../../Components/HomeButton/HomeButton";

export default function Results({ handleNextGroupRound, serverURL, groupid, currentRoundID, setCurrentGroupResult, CurrentGroupResult}) {


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
            let resultArray = data.resultArray
            let resultArraySorted = resultArray.sort((a, b) => b.votes - a.votes)
           setCurrentGroupResult(resultArraySorted)
           console.log(currentRoundID)
           console.log(groupid);
           console.log(`the following is the current CurrentGroupResult usestate:`)
           console.log(CurrentGroupResult)
            console.log(`the following is the current resultArray:`)
           console.log(data.resultArray)
           console.log(`the following is the current data:`)
           console.log(data)

          });
        };
        fetchVotes();
    
        const interval = setInterval(fetchVotes, 2000);
    
        return () => clearInterval(interval);
      }, [CurrentGroupResult, currentRoundID, groupid, serverURL, setCurrentGroupResult])



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
      
      <button className="nextBtn" onClick={handleNextGroupRound}>
        Next
      </button>
    </div>
  );
}
