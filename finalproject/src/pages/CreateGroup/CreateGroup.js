import "./CreateGroup.css";

import PreFilterSVG from "../PreFilterPage/PreFilterSVGGreen";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function CreateGroup({serverURL, setUserId, setGroupId, userid, groupid}) {
  // use navigate
  const navigate = useNavigate();
  const [userNameInput, setUserNameInput] = useState("");
  // States
  // const [userNameInput, setUserNameInput] = useState("");
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

    //put the username and group name into local storage
    //put username into a request body variable
    //http request to create a new user
    //get response with the new user id and store it locally
    //http post request to the serverless function to create a group and set the created_by to the user id
    //get the group id back from the serverless function and display it
    //set the new users group id to the group id with a post request to the serverless function
    //once confirmed that it's all done, navigate to the lobby page

    const userRequestBody = {
      type: "createUser",
      username: userNameInput
    };

    fetch(serverURL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userRequestBody),
    }) 
    .then((response) => response.json())
    .then((data) => {
      const useriddata = data.user_id
      setUserId(useriddata);
      console.log(`this is the response user id${data.user_id}`)
      console.log(`this is the userid usestate ${userid}`)
      

    const groupRequestBody = {
      type: "createGroup",
      group_name: groupNameInput,
      user_id: useriddata,
    };
    console.log(groupRequestBody)
    fetch(serverURL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(groupRequestBody),
    })
      .then((response) => response.json())
      .then((data) => {
        setGroupId(data.group_id);
    

    const assignUserRequestBody = {
      type: "assignUser",
      user_id: useriddata,
      group_id: data.group_id,
    };
    fetch(serverURL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(assignUserRequestBody),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
    

    if (userValid && groupValid) {
      navigate("/lobby");
    }
  });
});
});
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
