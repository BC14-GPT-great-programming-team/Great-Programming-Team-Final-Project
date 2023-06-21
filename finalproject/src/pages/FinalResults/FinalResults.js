import React from "react";
import "./FinalResults.css";
import "../../App.css";
import PreFilterSVG from "../PreFilterPage/PreFilterSVGPeach";

export default function FinalResults({ venueData, handleRestart }) {
  return (
    <div className="finalResultsPage">
      <h1>Enjoy your night out!</h1>
      <br></br>
      <div id="resultscard">
        <h2>{venueData && venueData[0].venue_name}</h2>
        <img
          src={venueData && venueData[0].image_url}
          className="restaurant_image"
          alt="restaurant"
        ></img>
        <div className="textMargin">
          <p>{venueData && venueData[0].address}</p>

          <p>{venueData && venueData[0].phone_no}</p>
          <p> User rating: {venueData && venueData[0].user_rating}</p>
          <p>{venueData && venueData[0].website_url}</p>
        </div>
        {/* <img src={venueData && venueData[0].image_url} alt="restaurant"></img> */}
      </div>
      {/* {venueData && venueData.map(restaurant => {
     return <p>{restaurant.venue_name}</p>})} */}

      <button onClick={handleRestart}>Home/Restart</button>
      <PreFilterSVG />
    </div>
  );
}
