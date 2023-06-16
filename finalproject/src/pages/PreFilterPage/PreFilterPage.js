import "./PreFilterPage.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ToggleSwitch from "../../Components/Button/Toggle switch/Toggleswitch";
import Dropdown from "../../Components/Button/DropDown/DropDown";
import DropdownCost from "../../Components/DropDownCost/DropDownCost";
import PreFilterSVG from "./PreFilterSVG";

function PreFilter({ setpreFilters, prefilters }) {
  const navigate = useNavigate();
  const [userInput, setUserInput] = useState({ location: "" });
  const [inputValid, setInputValid] = useState(false);

  function setThepreFilter(optionName, value) {
    setpreFilters((prevFilters) => ({
      ...prevFilters,
      [optionName]: value,
    }));
  }

  const handleNameChange = (event) => {
    const inputText = event.target.value.trim();
    setUserInput({ location: inputText });
    setInputValid(!!inputText);
  };

  const handleNameSubmit = (event) => {
    event.preventDefault();
    if (inputValid) {
      navigate("/votescreen");
    }
  };

  useEffect(() => {
    console.log(userInput);
  }, [userInput]);

  useEffect(() => {
    console.log(prefilters);
  }, [prefilters]);

  // Options for dropdown menus
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
      <p>If no filters needed, press Next</p>
      <h2>Enter Location</h2>
      <form onSubmit={handleNameSubmit}>
        <div>
          <input
          className="locationInput"
            type="text"
            name="name"
            value={userInput.location}
            onChange={handleNameChange}
            required
          />
        </div>
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

        <button
          className='preFilterBtn'
          style={{backgroundColor: inputValid ? "#c5a7cb" :"#ea9c90"}}
          disabled={!inputValid}
          type="submit"
        >
          Next
        </button>
      </form>

      {/* Imported Background */}
      <PreFilterSVG />
    </div>
  );
}

export default PreFilter;