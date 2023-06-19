// Component for Button
import { FaArrowRight } from "react-icons/fa";
import Button from "../../Components/Button/Button";
import HomeButton from "../../Components/HomeButton/HomeButton";
import { Link } from "react-router-dom";
import "./Lobby.css";

function Lobby() {
  return (
    <div className="lobby">
      <Link to="/">
        <HomeButton />
      </Link>

      <h2> group name</h2>
      <div className="container"></div>
      <br></br>
      <p>Everybody in?</p>
      <div className="startContainer">
        <p>Press </p>
        <Button className="startBtn" btnText="START" />
        <p> to begin</p>
      </div>
      <br></br>
      <p className="roomcode">ROOM CODE</p>
    </div>
  );
}

export default Lobby;
