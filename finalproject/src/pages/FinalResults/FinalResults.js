import React from "react";
import "./FinalResults.css";
import "../../App.css";
import PreFilterSVG from "../PreFilterPage/PreFilterSVGPeach";
import locationicon from "../../Assets/locationicon.png";

export default function FinalResults({ venueData, handleRestart }) {
 
  return (
    <div className="finalResultsPage">
    
      <h1 className="enjoy">Enjoy your night out!</h1>
      <br></br>
      <div id="resultscard">
        <h1 className="resturant">{venueData && venueData[0].venue_name}</h1>
        <img
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
          id="restaurant_image"
          alt="restaurant"
        ></img>
        <img className="location" src={locationicon} alt="locationicon" />
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
