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
      <div>
        <h2>You Have Selected</h2>
        <h2>{currentResult}</h2>
        </div>
      <button className="nextBtn" onClick={handleNextRound}>
        Next
      </button>
    </div>
  );
}
