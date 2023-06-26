import "./NeedHelp.css";
import HomeButton from "../../Components/HomeButton/HomeButton";
import { Link } from "react-router-dom";



function needHelp() {
    return (
<div>
<Link to="/">
        <HomeButton />
      </Link>
<h1>ABOUT CONSENSUS</h1>

<p>We are here to help you make those all important decision when you are out with your mates. Can't decide what to eat or where to go? 
We'll do it for you!
 </p>
<h2>FAQ</h2>
<p>Can I add my own options?

How many people can join a group? 

Can I save my favourite places?

Can I promote my business here?

What if my city is not available?
</p>

<p>CONTACT US </p>
</div>
)}

export default needHelp;