import { React } from "react";
import "./Results.css";

export default function Results({ handleNextRound, currentResult }) {
  return (
    <div className="resultsPage">
      <div>
        <h2>Results Page</h2>
        <h2>You have Selected:</h2>
        <h2>{currentResult}</h2>
      </div>
      <button className="nextBtn" onClick={handleNextRound}>
        Next
      </button>
    </div>
  );
}
