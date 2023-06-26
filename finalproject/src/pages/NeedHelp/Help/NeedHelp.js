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

<p className="intro">We're here to help you make those all important decisions when you're out with your mates. Can't decide what to eat or where to go? 
We'll do it for you!
 </p>

 <h2> How to use Consensus:</h2>
 <div className="howto">
<p>1) Set your non-negotiable requirements
<br></br>
2) Set up your friend group or join an existing one
<br></br>
3) Pick your favourite options
<br></br>
4) Based on the group consensus we'll recommend you a place/activity!
<br></br>
5) Enjoy your day minus the kerfuffle </p>
</div>

<h3>FAQ</h3>
<p>Can I add my own options?
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

<h4 className="contact">CONTACT US </h4>
<p className="twitter">TWITTER @Consensus</p>
</div>
)}

export default NeedHelp;
