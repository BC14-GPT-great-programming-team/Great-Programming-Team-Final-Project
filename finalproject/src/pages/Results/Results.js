import { React } from "react";
import "./Results.css";

export default function Results({ handleNextRound, currentResult }) {
  return (
    <div className="resultsPage">
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
