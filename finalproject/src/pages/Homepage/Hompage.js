// Component for Homepage

import "./Hompage.css";
import { Link } from "react-router-dom";
import Button from "../../Components/Button/Button";

function Homepage() {
  return (
    <div className="homepage">
      <h1>Hello</h1>
      <img className="logo" alt="logo" />
      <Button btnText="Go Solo" />
      <Link to="/create-join">
        <Button btnText="Group Mode" />
      </Link>
      <Button btnText="Spin The Wheel" />
    </div>
  );
}

export default Homepage;
