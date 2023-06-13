import "./PreFilterPage.css";
import Button from "../../Components/Button/Button";
import { Link } from "react-router-dom";
import ToggleSwitch from "../../Components/Button/Toggle switch/Toggleswitch";

function PreFilter() {
//add usestates for each option 
    return (
      <div>
        <h1>Dietary requirements</h1>
        <select name="Dietary" id="dietreq">
        <option value="Option 1">none</option>
            <option value="option 2">Vegetarian</option>
            <option value="option 3">Vegan</option>
            <option value="option 4">Halal</option>
            <option value="option 5">Kosher</option>
            <option value="option 6">Gluten-free</option>
        </select>
        
        <h1>Price Range</h1>
        <select name="priceRange" id="prices">
        <option value="choice 1">under £10</option>
            <option value="choice 2">under £20</option>
            <option value="choice 3">under £40</option>
            <option value="choice 3">over £40</option>
            <option value="choice 4">I don't mind</option>
        </select>
        <Link to="/votescreen">
            <Button btnText="Next" />
        </Link>
        
        <ToggleSwitch />
      </div>
    )
}

export default PreFilter;