// Component for Homepage

import "./Hompage.css";
import { Link } from "react-router-dom";
import Button from "../../Components/Button/Button";
import officialLogo from "../../Assets/officialLogo.png";
import PreFilterSVG from "../PreFilterPage/PreFilterSVGGreen";

// import { FaUsers, FaDharmachakra } from "react-icons/fa";

function Homepage({ setGroupMode }) {
  return (
    <div className="homepage">
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
          Go Solo
        </button>
      </Link>

      <Link to="/create-join">
        <button
          onClick={() => {
            setGroupMode(true);
          }}
          className="homepageBtn bounceTwo"
        >
          Group Mode
        </button>
      </Link>

      <div className="spinBtnContainer">
        <Button
          className="homepageBtn bounceThree"
          btnText="Spin The Wheel   "
          // icon={<FaDharmachakra />}
        />
      </div>
      <p className="motto">"Saving your friendships one decision at a time!"</p>
      <PreFilterSVG />
    </div>
  );
}

export default Homepage;
