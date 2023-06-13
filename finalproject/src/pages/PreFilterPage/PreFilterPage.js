import "./PreFilterPage.css";
import Button from "../../Components/Button/Button";
import { Link } from "react-router-dom";
import ToggleSwitch from "../../Components/Button/Toggle switch/Toggleswitch";
import Dropdown from "../../Components/Button/DropDown/DropDown";

function PreFilter() {
//add usestates for each option 

const options = [
{value: "none", label: "None"},
{value: "vegetarian", label: "Vegetarian"},
{value: "vegan", label: "Vegan"},
{value: "halal", label: "Halal"}, 
{value: "kosher", label: "Kosher"},
{value: "gluten-free", label: "Gluten-free"}
];


return (
      <div>
        <h1>Dietary requirements</h1>
        <Dropdown
        isSearchable
        isMulti
        placeHolder="Select..."
        options={options}
        onChange={(value) => console.log(value)}
        />
        <ToggleSwitch />
        <Link to="/votescreen">
            <Button btnText="Next" />
        </Link>
      </div>
    )
}

export default PreFilter;