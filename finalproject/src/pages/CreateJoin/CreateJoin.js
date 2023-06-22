// Component for Create or Join Group Page

import "./CreateJoin.css";
import Button from "../../Components/Button/Button";
import { Link } from "react-router-dom";
import HomeButton from "../../Components/HomeButton/HomeButton";
import PreFilterSVG from "../../Components/BackgroundSVG/PreFilterSVGGreen";

function CreateJoinGroup() {
  return (
    <div className="createJoinGroup">
      <Link to="/">
        <HomeButton />
      </Link>

      <Link to="/prefilter">
        <Button className="createJoinBtn" btnText="Create Group" />
      </Link>

      <Link to="/join-group">
        <Button className="createJoinBtn" btnText="Join Group" />
      </Link>
      <PreFilterSVG />
    </div>
  );
}

export default CreateJoinGroup;
