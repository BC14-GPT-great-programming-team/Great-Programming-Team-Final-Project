import React from 'react';
import {Link} from 'react-router-dom';

export default function FinalResults({rounds, roundCount, venueData}){
//const [roundResult, setRoundResult] = useState("");
//console.log(voteResults)
  return (
    <div>
    <div>
      <h1>This is Where you are Going! Enjoy</h1>
      <h1>{venueData && venueData[0].venue_name}</h1>
    </div>
    {/* {venueData && venueData.map(restaurant => {
     return <p>{restaurant.venue_name}</p>})} */}

        <button>Home/Restart</button>
    
    </div>
  )
};