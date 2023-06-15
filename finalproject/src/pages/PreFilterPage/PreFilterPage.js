import "./PreFilterPage.css";
import { useEffect } from "react";
import Button from "../../Components/Button/Button";
import { Link } from "react-router-dom";
import ToggleSwitch from "../../Components/Button/Toggle switch/Toggleswitch";
import Dropdown from "../../Components/Button/DropDown/DropDown";
import DropdownCost from "../../Components/DropDownCost/DropDownCost";
import PreFilterSVG from "./PreFilterSVG";

function PreFilter({ setpreFilters, prefilters }) {
  function setThepreFilter(optionName, value) {
    setpreFilters((prevFilters) => ({
      ...prevFilters,
      [optionName]: value,
    }));
  }

  useEffect(() => {
    console.log(prefilters);
  }, [prefilters]);

  // Options for dropdown menu's
  const options = [
    { value: "none", label: "None" },
    { value: "vegetarian", name: "vegetarian_options", label: "Vegetarian" },
    { value: "vegan", name: "vegan_options", label: "Vegan" },
    { value: "halal", name: "halal_options", label: "Halal" },
    { value: "kosher", name: "kosher_options", label: "Kosher" },
    { value: "gluten-free", name: "gluten_free_options", label: "Gluten-free" },
  ];

  const budgetOptions = [
    { value: "none", label: "None" },
    { value: "1", name: "cost_low", label: "Under £20" },
    { value: "2", name: "cost_medium", label: "Under £40" },
    { value: "3", name: "cost_high", label: "Under £60" },
  ];

  return (
    <div className="preFilter">
      <h2>Select Filters</h2>
      <p>If no filters needed press Next</p>
      <h4>Budget</h4>
      <DropdownCost
        setpreFilter={setThepreFilter}
        isMulti
        placeHolder="Select..."
        options={budgetOptions}
        onChange={(value) => console.log(value)}
      />
      <h4>Dietary requirements</h4>
      <Dropdown
        setpreFilter={setThepreFilter}
        isMulti
        placeHolder="Select..."
        options={options}
        onChange={(value) => console.log(value)}
      />
      <ToggleSwitch />
      <Link to="/votescreen">
        <Button className="preFilterBtn" btnText="Next" />
      </Link>{" "}
      {/* Imported Background */}
      <PreFilterSVG />
    </div>
  );
}

export default PreFilter;
