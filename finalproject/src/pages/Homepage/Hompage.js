// Component for Homepage

import "./Hompage.css";
import { Link } from "react-router-dom";
import Button from "../../Components/Button/Button";
import logoImage from "../../Assets/logo_test_2.jpg";
import PreFilterSVG from "../PreFilterPage/PreFilterSVG";

function Homepage() {
  return (
    <div className="homepage">
      <img className="logo" src={logoImage} alt="logo" />
      
      <Link to="/prefilter">
        <Button btnText="Go Solo" />
      </Link>
      <Link to="/create-join">
        <Button btnText="Group Mode" />
      </Link>
      <Button btnText="Spin The Wheel" />
      <PreFilterSVG />
    </div>
  );
}

export default Homepage;
