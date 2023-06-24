import { React } from "react";
import { Link } from "react-router-dom";
import "./Results.css";
import HomeButton from "../../Components/HomeButton/HomeButton";

export default function Results({ handleNextRound, currentResult}) {
  return (
    <div className="resultsPage">
      <Link to="/">
        <HomeButton />
      </Link>
      <div className="bubblesContainer">
        <div className="mainBubble "><h3 className="topResult">{currentResult}</h3></div>
        <div className="secondBubble"></div>
        <div className="thirdBubble"></div>
        <div className="bubble one"></div>
        <div className="bubble two"></div>
        <div className="bubble three"></div>
        <div className="bubble four"></div>
        <div className="bubble five"></div>
        <div className="bubble six"></div>
        <div className="bubble seven"></div>
        <div className="bubble eight"></div>
      </div>
      

      
      
      <button className="nextBtn" onClick={handleNextRound}>
        Next
      </button>
    </div>
  );
}

