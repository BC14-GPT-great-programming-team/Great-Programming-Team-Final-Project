import { React } from "react";
import "./Results.css";
// import { Link } from "react-router-dom";

export default function Results({ handleNextRound, roundCount, voteResults }) {
  //const [roundResult, setRoundResult] = useState("");

  // for (let i = 0; i < rounds.length; i++) {
  //   for (let j = 0; i < rounds[j].length; j++){
  //   if (rounds[i][j].score === 1) {

  // the voteResults array is an array of arrays
  // const voteResults = rounds.map((round) => {
  //   return round.map((option) => {
  //     if (option.score >= 1) {
  //       return option.name;
  //     } else {
  //       return null;
  //     }
  //   });
  // });

  //console.log(voteResults)
  return (
    <div className="resultsPage">
      <div>
        <h1>Results Page</h1>
        <h1>{voteResults[roundCount]} is the winner!</h1>
      </div>
      <button className="nextBtn" onClick={handleNextRound}>
        Next
      </button>
    </div>
  );
}
