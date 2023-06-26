import { React, useEffect } from "react";
import { Link } from "react-router-dom";
import "./GroupResults.css";
import HomeButton from "../../Components/HomeButton/HomeButton";

export default function GroupResults({
  handleNextGroupRound,
  serverURL,
  groupid,
  currentRoundID,
  setCurrentGroupResult,
  CurrentGroupResult,
  setCurrentRoundLabel,
  setGroupFilter,
}) {
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
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(groupUsernamesRequestBody),
      })
        .then((response) => response.json())
        .then((data) => {
          let roundLabel = data.roundlabel;
          let resultArray = data.resultArray;
          let resultArraySorted =
            resultArray && resultArray.sort((a, b) => b.votes - a.votes);
          if (roundLabel) {
            setCurrentRoundLabel(roundLabel);
          }
          if (resultArraySorted) {
            setCurrentGroupResult(resultArraySorted);
          }
          console.log(`this is CurrentGroupResults`);
          console.log(CurrentGroupResult);
          if (roundLabel !== undefined && resultArraySorted !== undefined) {
            setGroupFilter(roundLabel, resultArraySorted[0].choice);
          }

          //  console.log(`this is roundLabel:`)
          // console.log(roundLabel)
          //  console.log(`this is CurrentGroupResult:`)
          // console.log(CurrentGroupResult)
          // console.log(`this is resultArraySorted:`)
          // console.log(resultArraySorted)
        });
    };
    fetchVotes();

    const interval = setInterval(fetchVotes, 2000);

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="resultsPage">
      <Link to="/">
        <HomeButton />
      </Link>
      <div className="bubblesContainer">
        <div className="mainBubble ">
          <h3 className="topResult">
          {CurrentGroupResult && CurrentGroupResult[0] && CurrentGroupResult[0].choice ? CurrentGroupResult[0].choice : null}&nbsp;
          {CurrentGroupResult && CurrentGroupResult[0] && CurrentGroupResult[0].votes ? CurrentGroupResult[0].votes : null}
          </h3>
        </div>
        <div className="secondBubble">
        {CurrentGroupResult && CurrentGroupResult[1] && CurrentGroupResult[1].choice ? CurrentGroupResult[1].choice : null}&nbsp;
          {CurrentGroupResult && CurrentGroupResult[1] && CurrentGroupResult[1].votes ? CurrentGroupResult[1].votes : null}
        </div>
        <div className="thirdBubble">
        {CurrentGroupResult && CurrentGroupResult[2] && CurrentGroupResult[2].choice ? CurrentGroupResult[2].choice : null}&nbsp;
          {CurrentGroupResult && CurrentGroupResult[2] && CurrentGroupResult[2].votes ? CurrentGroupResult[2].votes : null}
        </div>
        <div className="bubble one"></div>
        <div className="bubble two"></div>
        <div className="bubble three"></div>
        <div className="bubble four"></div>
        <div className="bubble five"></div>
        <div className="bubble six"></div>
        <div className="bubble seven"></div>
        <div className="bubble eight"></div>
      </div>

      <button className="nextBtn" onClick={handleNextGroupRound}>
        Next
      </button>
    </div>
  );
}
