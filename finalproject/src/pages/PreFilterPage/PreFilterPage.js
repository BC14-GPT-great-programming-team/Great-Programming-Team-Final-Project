import "./PreFilterPage.css";
import  {useState, useEffect } from "react";
import Button from "../../Components/Button/Button";
import { Link } from "react-router-dom";
import ToggleSwitch from "../../Components/Button/Toggle switch/Toggleswitch";
import Dropdown from "../../Components/Button/DropDown/DropDown";
import DropdownCost from "../../Components/DropDownCost/DropDownCost";

function PreFilter() {

const [prefilters, setpreFilters] = useState({
  halal_options: null,
  vegan_options: null,
  vegetarian_options: null,
  kosher_options: null,
  gluten_free_options: null,
});

function setThepreFilter(optionName, value) {
  setpreFilters((prevFilters) => ({
    ...prevFilters,
    [optionName]: value
  }));
}

useEffect(() => {
  console.log(prefilters);
}, [prefilters]);



const options = [
{value: "none", label: "None"},
{value: "vegetarian", name:"vegetarian_options", label: "Vegetarian"},
{value: "vegan", name:"vegan_options", label: "Vegan"},
{value: "halal", name:"halal_options", label: "Halal"}, 
{value:"kosher", name:"kosher_options", label: "Kosher" },
{value: "gluten-free", name:"gluten_free_options", label: "Gluten-free" }
];


return (
      <div>
        <h1>Dietary requirements</h1>
        <DropdownCost 
          setpreFilter={setThepreFilter}
        isMulti
        placeHolder="Select..."
        options={options}
        onChange={(value) => console.log(value)}
        />
        <Dropdown
        setpreFilter={setThepreFilter}
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