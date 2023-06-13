import {React} from 'react';
import {Link} from 'react-router-dom';

export default function FinalResults({rounds, roundCount, venueData}){
//const [roundResult, setRoundResult] = useState("");
//console.log(voteResults)
  return (
    <div>
    <div>
      <h1>Results Page</h1>
      <h1>{venueData[0].venue_name} is the winner!</h1>
    </div>
    {venueData && venueData.map(restaurant => {
     return <p>{restaurant.venue_name}</p>})}
        <button>Home/Restart</button>
    
    </div>
  )
};