// Component for Homepage

import "./Hompage.css";
import { Link } from "react-router-dom";
import Button from "../../Components/Button/Button";
import logoImage from "../../Assets/blue.PNG";

function Homepage() {
  return (
    <div className="homepage">
      <h1>Hello</h1>
    
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
