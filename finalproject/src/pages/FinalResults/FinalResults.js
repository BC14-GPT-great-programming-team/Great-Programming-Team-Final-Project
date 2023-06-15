import React from "react";
import "./FinalResults.css";
import "../../App.css";

export default function FinalResults({
  rounds,
  roundCount,
  venueData,
  handleRestart,
}) {
  //const [roundResult, setRoundResult] = useState("");
  //console.log(voteResults)

  return (
    <div className="finalResultsPage">
      <h1>This is Where you are Going! Enjoy</h1>
      <div id="resultscard">
        <h1>{venueData && venueData[0].venue_name}</h1>
        <h2>{venueData && venueData[0].address}</h2>
        <h2>{venueData && venueData[0].city}</h2>
        <h2>{venueData && venueData[0].email}</h2>
        <h2>{venueData && venueData[0].phone_no}</h2>
        <h2>{venueData && venueData[0].address}</h2>
        <h2>{venueData && venueData[0].website_url}</h2>
        <h2>{venueData && venueData[0].cuisine_type}</h2>
        {/* <img src={venueData && venueData[0].image_url} alt="restaurant"></img> */}
        <img
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
          id="restaurant_image"
          alt="restaurant"
        ></img>
      </div>
      {/* {venueData && venueData.map(restaurant => {
     return <p>{restaurant.venue_name}</p>})} */}

      <button onClick={handleRestart}>Home/Restart</button>
    </div>
  );
}
