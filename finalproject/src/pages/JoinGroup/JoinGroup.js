import "./JoinGroup.css";
import Button from "../../Components/Button/Button";
import HomeButton from "../../Components/HomeButton/HomeButton";
import { Link } from "react-router-dom";

function JoinGroup() {
  return (
    <div className="JoinGroup">
      <Link to="/">
        <HomeButton />
      </Link>
      <input placeholder="Enter Code" />
      <input placeholder="Enter Name" />

      <Button btnText="NEXT" />
    </div>
  );
}

export default JoinGroup;
