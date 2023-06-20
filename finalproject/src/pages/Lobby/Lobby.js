// Component for Button
import Button from "../../Components/Button/Button";
import HomeButton from "../../Components/HomeButton/HomeButton";
import { Link } from "react-router-dom";

import "./Lobby.css";

function Lobby({ groupName, groupid}) {
  
  return (
    <div className="lobby">
      <Link to="/">
        <HomeButton />
      </Link>

      <h2>{groupName && groupName}</h2>
      <div className="container"></div>
      <br></br>
      <p>Everybody in?</p>
      <div className="startContainer">
        <p>Press </p>
        <Button className="startBtn" btnText="START" />
        <p> to begin</p>
      </div>
      <br></br>
      <p className="roomcode">{groupid && groupid}</p>
    </div>
  );
}

export default Lobby;
