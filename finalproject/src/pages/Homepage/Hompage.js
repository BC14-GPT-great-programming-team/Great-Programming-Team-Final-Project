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
      <h1 className="h1">concensus, the ultimate decision-maker for indecisive folk</h1>
      <img className="logo" src={officialLogo} alt="logo" />
      {/* <h1>
        Consens<span>U</span>s
      </h1>
      {/* <FaUsers className="icon" /> */}
      {/* <h4>The Ultimate Decision Maker</h4>  */}

      <Link to="/prefilter">
        <button
          onClick={() => {
            setGroupMode(false);
          }}
          className="topHomeBtn homepageBtn bounceOne"
        >
          GO SOLO
        </button>
      </Link>

      <Link to="/create-join">
        <button
          onClick={() => {
            setGroupMode(true);
          }}
          className="homepageBtn bounceTwo"
        >
          GROUP MODE
        </button>
      </Link>

      {/* <div className="spinBtnContainer">
        <Button
          className="homepageBtn bounceThree"
          btnText="SPIN THE WHEEL   "
          // icon={<FaDharmachakra />}
        />
      </div> */}


      <Link to="/needHelp">
        <Button
          className="needHelpBtn"
          btnText="Need help?"
        />
        </Link>
      

      <div>
      <p className="motto">"Saving your friendships one decision at a time!"</p>
      <PreFilterSVG />
    </div>
    </div>
  );
}

export default Homepage;
