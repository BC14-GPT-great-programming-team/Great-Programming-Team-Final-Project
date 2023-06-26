import "./NeedHelp.css";
import HomeButton from "../../../Components/HomeButton/HomeButton";
import { Link } from "react-router-dom";

function NeedHelp() {

    return (
<div className="help">
<Link to="/">
        <HomeButton />
      </Link>
      <h1>ABOUT CONSENSUS</h1>

      <p>
        We are here to help you make those all important decision when you are
        out with your mates. Can't decide what to eat or where to go? We'll do
        it for you!
      </p>

      <h2> How to use Consensus:</h2>

      <h3>FAQ</h3>
      <p>
        Can I add my own options?
        <br></br>
        How many people can join a group?
        <br></br>
        Can I save my favourite places?
        <br></br>
        Can I promote my business here?
        <br></br>
        What if my city is not available?
        <br></br>
      </p>

      <p>CONTACT US </p>
    </div>
  );
}

export default NeedHelp;
