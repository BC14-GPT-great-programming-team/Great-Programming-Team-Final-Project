// Component for Homepage

import "./Hompage.css";
import { Link } from "react-router-dom";
import Button from "../../Components/Button/Button";
import officialLogo from "../../Assets/officialLogo.png";
import PreFilterSVG from "../../Components/BackgroundSVG/PreFilterSVGGreen";

// import { FaUsers, FaDharmachakra } from "react-icons/fa";

function Homepage({ setGroupMode }) {
  return (
    <div className="homepage">
      <h1 className="h1">
        concensus, the ultimate decision-maker for indecisive folk
      </h1>
      <img
        className="logo"
        src={officialLogo}
        alt="ConsensUs Logo: a tangle of arms meeting together"
      />
      {/* <h1>
        Consens<span>U</span>s
      </h1>
      {/* <FaUsers className="icon" /> */}
      {/* <h4>The Ultimate Decision Maker</h4>  */}

      <Link to="/prefilter" aria-label="Switch to Pre Filter Page">
        <button
          onClick={() => {
            setGroupMode(false);
          }}
          className="topHomeBtn homepageBtn bounceOne"
        >
          GO SOLO
        </button>
      </Link>

      <Link to="/create-join" aria-label="Swicth to Create Join Page">
        <button
          onClick={() => {
            setGroupMode(true);
          }}
          className="homepageBtn bounceTwo"
        >
          GROUP MODE
        </button>
      </Link>

      <Link to="/needHelp" aria-label="Swicth to Need Help Page">
        <Button className="needHelpBtn" btnText="Need help?" />
      </Link>

      <div>
        <p className="motto" aria-label="Tagline">
          "Saving your friendships one decision at a time!"
        </p>
        <PreFilterSVG />
      </div>
    </div>
  );
}

export default Homepage;
