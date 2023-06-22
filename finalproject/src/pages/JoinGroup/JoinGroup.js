import "./JoinGroup.css";
import HomeButton from "../../Components/HomeButton/HomeButton";
import { Link } from "react-router-dom";
//import PreFilterSVG from "../PreFilterPage/PreFilterSVGGreen";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import PreFilterSVG from "../../Components/BackgroundSVG/PreFilterSVGGreen";

function JoinGroup({
  serverURL,
  setUserId,
  setGroupId,
  userid,
  setGroupName,
  setGroupUsernames,
  groupUsernames,
}) {
  // use navigate
  const navigate = useNavigate();
  const [userNameInput, setUserNameInput] = useState("");
  // States
  // const [userNameInput, setUserNameInput] = useState("");
  const [groupIdInput, setGroupIdInput] = useState("");
  const [userValid, setuserValid] = useState(false);
  const [groupValid, setGroupValid] = useState(false);

  // Funtions for inputs

  const handleGroupIdChange = (event) => {
    const inputText = event.target.value;
    setGroupIdInput(inputText.trim());
    console.log(groupIdInput);
    setGroupValid(!!inputText);
  };

  const handleUserNameChange = (event) => {
    const inputText = event.target.value.trim();
    setUserNameInput(inputText);
    console.log(userNameInput);
    setuserValid(!!inputText);
  };

  const handleJoinSubmit = (event) => {
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
      username: userNameInput,
    };

    fetch(serverURL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userRequestBody),
    })
      .then((response) => response.json())
      .then((data) => {
        const useriddata = data.user_id;
        setUserId(useriddata);
        console.log(`this is the response user id${data.user_id}`);
        console.log(`this is the userid usestate ${userid}`);

        const groupRequestBody = {
          type: "assignUser",
          group_id: groupIdInput,
          user_id: useriddata,
        };

        console.log(groupRequestBody);

        fetch(serverURL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(groupRequestBody),
        })
          .then((response) => response.json())
          .then((data) => {
            setGroupId(data.group_id);
            setUserId(data.user_id);

            const groupUsernamesRequestBody = {
              type: "getGroupMembers",
              group_id: data.group_id,
            };

            fetch(serverURL, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(groupUsernamesRequestBody),
            })
              .then((response) => response.json())
              .then((data) => {
                console.log(data.usernames);
                setGroupUsernames(data.usernames);
                console.log(groupUsernames);
              });

            const groupNameRequestBody = {
              type: "getGroupName",
              group_id: data.group_id,
            };

            fetch(serverURL, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(groupNameRequestBody),
            })
              .then((response) => response.json())
              .then((data) => {
                setGroupName(data.group_name);
              });

            if (userValid && groupValid) {
              navigate("/lobby");
            }
          });
      });
  };

  return (
    <div className="JoinGroup">
      <Link to="/">
        <HomeButton />
      </Link>
      <h2>Enter Details</h2>
      <form onSubmit={handleJoinSubmit}>
        <input
          className="joinGroupInput"
          placeholder="Enter group code"
          onChange={handleGroupIdChange}
          type="text"
          name="groupId"
          value={groupIdInput}
          required
        />
        <input
          className="joinGroupInput"
          placeholder="Enter a username"
          onChange={handleUserNameChange}
          type="text"
          name="userName"
          value={userNameInput}
          required
        />
        <button
          className="joinGroupBtn"
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

export default JoinGroup;
