import { React } from "react";
// import { Link } from "react-router-dom";

export default function Results({handleNextRound, rounds, roundCount, venueData, voteResults}) {
//const [roundResult, setRoundResult] = useState("");



  // for (let i = 0; i < rounds.length; i++) {
  //   for (let j = 0; i < rounds[j].length; j++){
  //   if (rounds[i][j].score === 1) {


  // the voteResults array is an array of arrays
  const voteResults = rounds.map((round) => {
    return round.map((option) => {
      if (option.score >= 1) {
        return option.name;
      } else {
        return null;
      }
    });
  });


  //console.log(voteResults)
  return (
    <div>
      <div>
        <h1>Results Page</h1>
        <h1>{voteResults[roundCount]} is the winner!</h1>
      </div>
      <button onClick={handleNextRound}>Next</button>
    </div>
  );
}
