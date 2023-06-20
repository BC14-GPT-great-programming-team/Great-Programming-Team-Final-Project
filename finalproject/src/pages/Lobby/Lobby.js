// Component for Button
import Button from "../../Components/Button/Button";
import HomeButton from "../../Components/HomeButton/HomeButton";
import { Link } from "react-router-dom";

import "./Lobby.css";

function Lobby({ groupName, groupid, groupUsernames}) {
  
  return (
    <div className="lobby">
      <Link to="/">
        <HomeButton />
      </Link>

      <h2>Welcome, {groupName}!</h2>
      <p className="roomcode">Your room code is {groupid} - share this with your friends to let them join!</p>
      <div className="container">
        <p>Players in this room:</p>
        <div className="playerList">
          {groupUsernames.map((username) => (
            <p>{username}</p>
          ))}
          </div>
      </div>
      <br></br>
      <p>Everybody in?</p>
      <div className="startContainer">
        <p>Press </p>
        <Button className="startBtn" btnText="START" />
        <p> to begin</p>
      </div>
      <br></br>
    </div>
  );
}

export default Lobby;
