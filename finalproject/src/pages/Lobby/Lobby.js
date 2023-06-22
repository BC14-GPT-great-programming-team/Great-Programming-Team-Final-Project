// Component for Button
import Button from "../../Components/Button/Button";
import PreFilterSVG from "../../Components/BackgroundSVG/PreFilterSVGGreen";
import HomeButton from "../../Components/HomeButton/HomeButton";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import "./Lobby.css";

function Lobby({
  groupName,
  groupid,
  groupUsernames,
  serverURL,
  setGroupUsernames,
}) {
  useEffect(() => {
    const fetchGroupUsernames = () => {
      const groupUsernamesRequestBody = {
        type: "getGroupMembers",
        group_id: groupid,
      };

      fetch(serverURL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(groupUsernamesRequestBody),
      })
        .then((response) => response.json())
        .then((data) => {
          setGroupUsernames(data.usernames);
        });
    };
    fetchGroupUsernames();

    const interval = setInterval(fetchGroupUsernames, 1000000);

    return () => clearInterval(interval); //insert interval here
  }, [groupid, serverURL, setGroupUsernames]);

  return (
    <div className="lobby">
      <Link to="/">
        <HomeButton />
      </Link>

      <h2 id="welcome-message">Welcome, {groupName}!</h2>
      <p className="roomcode">
        Your room code is {groupid} - share this with your friends to let them
        join!
      </p>
      <div className="container">
        <h6 id="lobby-card">Players in this room:</h6>
        <ul className="playerList">
          {groupUsernames.map((username) => (
            <li id="player-name">{username}</li>
          ))}
        </ul>
      </div>
      <br></br>
      <p>Everybody in?</p>
      <div className="startContainer">
        <Button className="startBtn" btnText="START" />
      </div>
      <br></br>
      <PreFilterSVG className="lobbySVG" />
    </div>
  );
}

export default Lobby;
