import "./CreateGroup.css";

import PreFilterSVG from "../PreFilterPage/PreFilterSVGGreen";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function CreateGroup() {
  // use navigate
  const navigate = useNavigate();

  // States
  const [userNameInput, setUserNameInput] = useState("");
  const [groupNameInput, setGroupNameInput] = useState("");
  const [userValid, setuserValid] = useState(false);
  const [groupValid, setGroupValid] = useState(false);

  // Funtions for inputs
  const handleUserNameChange = (event) => {
    const inputText = event.target.value.trim();
    setUserNameInput(inputText);
    console.log(userNameInput);
    setuserValid(!!inputText);
  };

  const handleGroupNameChange = (event) => {
    const inputText = event.target.value.trim();
    setGroupNameInput(inputText);
    console.log(groupNameInput);
    setGroupValid(!!inputText);
  };

  const handleGroupSubmit = (event) => {
    event.preventDefault();
    if (userValid && groupValid) {
      navigate("/lobby");
    }
  };

  return (
    <div className="CreateGroup">
      <form onSubmit={handleGroupSubmit}>
        <input
          onChange={handleUserNameChange}
          type="text"
          name="groupName"
          value={userNameInput}
          placeholder="Enter username"
          required
        />
        <input
          placeholder="Enter group name"
          onChange={handleGroupNameChange}
          type="text"
          name="groupName"
          value={groupNameInput}
          required
        />
        <button
          className="createGroupBtn"
          style={{
            backgroundColor: userValid && groupValid ? "#c5a7cb" : "#ea9c90",
          }}
          disabled={!userValid && !groupValid}
          type="submit"
        >
          Next
        </button>
      </form>
      <PreFilterSVG />
    </div>
  );
}

export default CreateGroup;
