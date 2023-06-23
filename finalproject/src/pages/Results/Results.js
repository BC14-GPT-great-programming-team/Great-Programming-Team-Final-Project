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

{/* <div className="wavy">
  <h2>
  <span style={{"--i": 1 }}>Y</span>
  <span style={{"--i": 2 }}>o</span>
  <span style={{"--i": 3 }}>u</span>
  <br></br>
  <span style={{"--i": 4 }}>h</span>
  <span style={{"--i": 5 }}>a</span>
  <span style={{"--i": 6 }}>v</span>
  <span style={{"--i": 7} }>e</span>
  <br></br>
  <span style={{"--i": 8 }}>c</span>
  <span style={{"--i": 9 }}>h</span>
  <span style={{"--i": 10 }}>o</span>
  <span style={{"--i": 11 }}>s</span>
  <span style={{"--i": 12 }}>e</span>
  <span style={{"--i": 13 }}>n</span>
  <span style={{"--i": 14 }}>:</span>
  </h2></div> */}