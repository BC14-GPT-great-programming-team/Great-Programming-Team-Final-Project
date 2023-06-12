// Component for Homepage

import "./Hompage.css";
import { Link } from "react-router-dom";
import Button from "../../Components/Button/Button";
import logoImage from "../../Assets/logo_test_2.jpg";

function Homepage() {
  return (
    <div className="homepage">
      <img className="logo" src={logoImage} alt="logo" />
      <Button btnText="Go Solo" />
      <Link to="/create-join">
        <Button btnText="Group Mode" />
      </Link>
      <Button btnText="Spin The Wheel" />
    </div>
  );
}

export default Homepage;
