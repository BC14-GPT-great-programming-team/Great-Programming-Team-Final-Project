import {React} from 'react';
import {Link} from 'react-router-dom';

export default function Results({handleNextRound, rounds, roundCount, venueData}){
//const [roundResult, setRoundResult] = useState("");




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
    {venueData && venueData.map(restaurant => {
     return <p>{restaurant.venue_name}</p>})}
        <button onClick={handleNextRound}>Next</button>
    
    </div>
  )
};