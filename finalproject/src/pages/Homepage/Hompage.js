// Component for Homepage

import "./Hompage.css";
import { Link } from "react-router-dom";
import Button from "../../Components/Button/Button";
import consensuslogo from "../../Assets/consensuslogo.png";
import PreFilterSVG from "../PreFilterPage/PreFilterSVGGreen";
// import { FaUsers, FaDharmachakra } from "react-icons/fa";

function Homepage({groupMode,setGroupMode}) {

  function changeMode() {
    setGroupMode(true);
  }

  return (
    <div className="homepage">
      <img className="logo" src={consensuslogo} alt="logo" />
      {/* <h1>
        Consens<span>U</span>s
      </h1>
      {/* <FaUsers className="icon" /> */}
      {/* <h4>The Ultimate Decision Maker</h4>  */}

      <Link to="/prefilter">
        <Button
          className="topHomeBtn homepageBtn bounceOne"
          btnText="Go Solo"
        />
      </Link>
      <Link to="/create-join">
        <Button onClick={changeMode} className="homepageBtn bounceTwo" btnText="Group Mode" />
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
