import "./NeedHelp.css";
import HomeButton from "../../../Components/HomeButton/HomeButton";
import { Link } from "react-router-dom";

function NeedHelp() {
  return (
    <div className="help">
      <Link to="/">
        <HomeButton />
      </Link>

      <h1 className="aboutHeader">ABOUT CONSENSUS</h1>

      <p className="intro">
        We're here to help you make those all important decisions when you're
        out with your mates. Can't decide what to eat or where to go? We'll do
        it for you!
      </p>

      <h2> How to use Consensus:</h2>
      <div className="howto">
        <p> Set your non-negotiable requirements</p>

        <p> Set up your friend group or join an existing one</p>

        <p>Pick your favourite options</p>

        <p>
          Based on the group consensus we'll recommend you a place/activity!
        </p>

        <p>Enjoy your day minus the kerfuffle </p>
        {/* <p>
          Set your non-negotiable requirements
          <br></br>
          Set up your friend group or join an existing one
          <br></br>
          Pick your favourite options
          <br></br>
          Based on the group consensus we'll recommend you a place/activity!
          <br></br>
          Enjoy your day minus the kerfuffle{" "}
        </p> */}
      </div>

      <h3>FAQ</h3>
      <div className="answerCard">
        Can I add my own options?
        <p className="answer">
          Customizable features are currently in the works! We are excited to
          get these out to you soon!
        </p>
        How many people can join a group?
        <p className="answer">
          Unlimited numbers! Whether its just a few of your mates or an entire
          work department, we cater to all!{" "}
        </p>
        Can I save my favourite places?
        <p className="answer"> This is a feature we're working on!</p>
        Can I promote my business here?
        <p className="answer">
          {" "}
          Please do contact us on workwithus@consensus.com for opportunities!{" "}
        </p>
        What if my city is not available?
        <p className="answer">
          Please bear with us while we expand our area range. We appreciate your
          patience!
        </p>
      </div>

      <h4 className="contact">CONTACT US </h4>
      <p className="twitter">TWITTER @Consensus</p>
    </div>
  );
}

export default NeedHelp;
