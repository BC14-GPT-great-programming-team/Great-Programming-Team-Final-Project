import React from "react";
import "./FinalResults.css";
import "../../App.css";
import PreFilterSVG from "../../Components/BackgroundSVG/PreFilterSVGPeach";
import { FaLocationArrow } from "react-icons/fa";

export default function FinalResults({ venueData, handleRestart }) {
  return (
    <div className="finalResultsPage">
      <h2 className="enjoy">Enjoy your night out!</h2>
      <div className="resultsCard">
        <h2 className="restaurantName">
          {venueData && venueData[0].venue_name}
        </h2>

        <img
          src={venueData && venueData[0].image_url}
          className="restaurant_image"
          alt="restaurant"
        ></img>

        <div className="textMargin">
          <p>{venueData && venueData[0].address}</p>
          <FaLocationArrow className="venueIcon" />
          <p>{venueData && venueData[0].phone_no}</p>
          <p> User rating: {venueData && venueData[0].user_rating}</p>
          <p>{venueData && venueData[0].website_url}</p>
        </div>
        {/* <img src={venueData && venueData[0].image_url} alt="restaurant"></img> */}
      </div>
      {/* {venueData && venueData.map(restaurant => {
     return <p>{restaurant.venue_name}</p>})} */}

      <button className="finalResultsBtn" onClick={handleRestart}>
        Home/Restart
      </button>
      <PreFilterSVG />
    </div>
  );
}
