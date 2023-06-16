// Component for Homepage

import "./Hompage.css";
import { Link } from "react-router-dom";
import Button from "../../Components/Button/Button";
// import logoImage from "../../Assets/logo_test_2.jpg";
import PreFilterSVG from "../PreFilterPage/PreFilterSVGGreen";
import { FaUsers, FaDharmachakra } from "react-icons/fa";

function Homepage() {
  return (
    <div className="homepage">
      {/* <img className="logo" src={logoImage} alt="logo" /> */}
      <h1>
        Consens<span>U</span>s
      </h1>
      <FaUsers className="icon" />
      <h4>The Ultimate Decision Maker</h4>

      <Link to="/prefilter">
        <Button
          className="topHomeBtn homepageBtn bounceOne"
          btnText="Go Solo"
        />
      </Link>
      <Link to="/create-join">
        <Button className="homepageBtn bounceTwo" btnText="Group Mode" />
      </Link>
      <div className="spinBtnContainer">
        <Button
          className="homepageBtn bounceThree"
          btnText="Spin The Wheel   "
          icon={<FaDharmachakra />}
        />
      </div>
      <p>"Saving your friendships one decision at a time!"</p>
      <PreFilterSVG />
    </div>
  );
}

export default Homepage;
