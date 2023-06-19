// Component for Create or Join Group Page

import "./CreateJoin.css";
import Button from "../../Components/Button/Button";
import { Link } from "react-router-dom";
import HomeButton from "../../Components/HomeButton/HomeButton";

function CreateJoinGroup() {
  return (
    <div className="createJoinGroup">

      <Link to="/"> 
      <HomeButton />
      </Link>
      
      <Link to="/creategroup"> 
      <Button btnText="Create Group" />
      </Link>
      
      <Link to="/join-group">
        <Button btnText="Join Group" />
      </Link>
      
    </div>
  );
}

export default CreateJoinGroup;
