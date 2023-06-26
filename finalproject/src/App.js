//import rounds to use useContext
import { RoundsProvider, useRounds } from "./roundData";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import VoteScreen from "./pages//VoteScreen/VoteScreen";
import Results from "./pages/Results/Results";
import { useEffect, useState } from "react";
import Homepage from "./pages/Homepage/Hompage.js";
import CreateJoinGroup from "./pages/CreateJoin/CreateJoin.js";
import JoinGroup from "./pages/JoinGroup/JoinGroup";
import supabase from "./supabaseClient";
import FinalResults from "./pages/FinalResults/FinalResults";
import PreFilter from "./pages/PreFilterPage/PreFilterPage.js";
import CreateGroup from "./pages/CreateGroup/CreateGroup";
import Lobby from "./pages/Lobby/Lobby";
import GroupVoteScreen from "./pages/GroupVoteScreen/GroupVoteScreen";
import GroupResults from "./pages/GroupResults/GroupResults";
import GroupFinalResults from "./pages/GroupFinalResult/GroupFinalResult";
// Green dynamic background can be applied to every page with below

function App() {


  //below is the server address when testing with netlify dev - uncomment this while testing, and comment out before merging to main for deployment

  const serverURL = "http://localhost:8888/.netlify/functions/votehandler";

  //below is the server address when deployed to netlify - uncomment this before merging to main for deployment, and comment out while testing with netlify dev
 
  // const serverURL = "https://consensusgpt.netlify.app/.netlify/functions/votehandler";

  //this is the initial state of the rounds. It is passed down to the vote screen and used to display the options.
  const initialRounds = useRounds();
  //this is the user id that is passed down to the vote screen and used to identify the user.
  const [userid, setUserId] = useState(null);
  //this is the group id that is passed down to the vote screen and used to identify the group.
  const [groupid, setGroupId] = useState(null);
  //this is the group name that is passed down to the vote screen and used to identify the group.
  const [groupName, setGroupName] = useState("");
  //this is the list of group usernames that is passed down to the vote screen and used to render the usernames in the lobby screen
  const [groupUsernames, setGroupUsernames] = useState([]);
  //this is the navigate function that is used to navigate between pages.
  const navigate = useNavigate();
  //selectedOption gets set to the id of the option that the user has selected.
  const [selectedOption, setSelectedOption] = useState(null);
  //this is the current round id that is passed down to the vote screen and used to display the options.
  const [currentRoundID, setCurrentRoundID] = useState("An Activity");
  //this is selected option name that is passed down to the results page and displayed.
  const [currentResult, setTheCurrentResult] = useState(null);
  //everything returned after round voting is stored in the usestate array below
  const [CurrentGroupResult, setCurrentGroupResult] = useState([]);
  // useState for setting the error when fetching data from Supabase
  const [fetchError, setFetchError] = useState(null);
  //useState for setting the current round label
  const [CurrentRoundLabel, setCurrentRoundLabel] = useState(null);
  //useState for setting the venues data that is fetched from Supabase
  const [venueData, setVenueData] = useState(null);
  //this is the array of rounds that is used to display the options on the vote screen. The score is used to determine which option has been selected. The roundLabel is used to determine which filter to apply to the data from supabase.
  const [rounds, setRounds] = useState(initialRounds);
  //usestate for storing whether in group or solo mode - true means group mode, false is solo
  const [groupMode, setGroupMode] = useState(false);
  //this is the current round that is used to display the options on the vote screen.
  const currentRound = rounds[currentRoundID];
  //filters to be interpolated into the query - prefilters are set from the prefilter page and filters are set from the vote screen
  const [prefilters, setpreFilters] = useState({
    halal_options: null,
    vegan_options: null,
    vegetarian_options: null,
    kosher_options: null,
    gluten_free_options: null,
    cost_low: null,
    cost_medium: null,
    cost_high: null,
  });
  const [filters, setFilters] = useState({
    venue_type: null,
    cuisine_type: null,
    atmosphere: null,
    time: null,
    dining_experience: null,
  });

 //GROUP
   const [groupFilters, setGroupFilters] = useState({
     venue_type: null,
     cuisine_type: null,
     atmosphere: null,
     time: null,
     dining_experience: null,
   });

   useEffect(() => {
    const handleUnload = () => {
      const userRequestBody = {
        type: "getGroupMembers",
        group_id: groupid,
      };
      fetch(serverURL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userRequestBody),
      }) 
      .then((response) => response.json())
      .then((data) => {
        const activeUserCount = data.usernames.length;
        //if there is more than one user left in the group when the user leaves, delete the user's votes from the votes table
        //then do a second server call to delete the user from the users table
        if (activeUserCount > 1) {
          const votePurgeBody = {
            type: "purgeUserVotes",
            user_id: userid,
          };
          fetch(serverURL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(votePurgeBody),
          }) 
          .then((response) => response.json())
          .then((data) => {
            console.log(data.message);
          })
          
          const purgeUserBody = {
            type: "purgeUser",
            user_id: userid,
          };
          fetch(serverURL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(purgeUserBody),
          }) 
          .then((response) => response.json())
          .then((data) => {
            console.log(data.message);
          })
        }
        //else if the user leaving is the last one in the group, first delete all the group's votes, then delete the group, then delete the user
        else if (activeUserCount === 1) {
          const purgeGroupVotesBody = {
            type: "purgeGroupVotes",
            group_id: groupid,
          };
          fetch(serverURL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(purgeGroupVotesBody),
          }) 
          .then((response) => response.json())
          .then((data) => {
            console.log(`Return message from purgeGroupVotes path: ${data.message}`)
          })

          const purgeGroupBody = {
            type: "purgeGroup",
            group_id: groupid,
          };
          fetch(serverURL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(purgeGroupBody),
          }) 
          .then((response) => response.json())
          .then((data) => {
            console.log(`Return message from purgeGroup path: ${data.message}`)
          })

          const purgeUserBody = {
            type: "purgeUser",
            user_id: userid,
          };
          fetch(serverURL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(purgeUserBody),
          }) 
          .then((response) => response.json())
          .then((data) => {
            console.log(`Return message from purgeUser path: ${data.message}`)
          })


        }
      })
      .catch(error => {
        console.log(error);
      })
    }

    window.addEventListener("unload", handleUnload);
    return () => window.removeEventListener("unload", handleUnload);
  }, [groupid, userid]);


  //When you click on a button the function below is triggered. It takes in the option name and the value of the option. It then sets the filters state to the option name and value. This is then passed down to the vote screen and used to filter the data from supabase.
//SOLO
  function setFilter(optionName, value) {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [optionName]: value,
    }));
  }
  
//GROUP
   function setGroupFilter(optionName, value) {
     setGroupFilters((prevFilters) => ({
       ...prevFilters,
       [optionName]: value,
     }));
   }


  // function is triggered by Restart button on the final Results page and it resets everything to the initial state.
  function handleRestart() {
    setFilters({
      venue_type: null,
    cuisine_type: null,
    atmosphere: null,
    time: null,
    dining_experience: null,
    });
    setGroupFilters({
      venue_type: null,
      cuisine_type: null,
      atmosphere: null,
      time: null,
      dining_experience: null,
    });
    setSelectedOption(null);
    setCurrentRoundID("An Activity");
    setTheCurrentResult(null);
    setCurrentGroupResult([]);
    navigate("/");
    setRounds(initialRounds);
    const purgeGroupVotesBody = {
      type: "purgeGroupVotes",
      group_id: groupid,
    };
    fetch(serverURL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(purgeGroupVotesBody),
    }) 
    .then((response) => response.json())
    .then((data) => {
      console.log(`Return message from purgeGroupVotes path: ${data.message}`)
    })
  }

  //this function is called in the vote screen by the handleVote function which is called by the option buttons on the vote screen. It takes in the option name and sets the current result state to the option name. This is then passed down to the results page and displayed.
  function setCurrentResult(optionname) {
    setTheCurrentResult(optionname);
  }

  //this is the call to supabase
  useEffect(() => {
    const fetchData = async () => {
      const query = supabase.from("venues").select();
  //the eq calls need to be wrapped in conditionals because if they are null or undefined they will return an error.
      //GROUP
  if (groupFilters.venue_type !== null && groupFilters.venue_type !== undefined) {
    query.eq("venue_type", groupFilters.venue_type);
  }
  if (groupFilters.time !== null && groupFilters.time !== undefined) {
    query.eq("time", groupFilters.time);
  }
  if (groupFilters.cuisine_type !== null && groupFilters.cuisine_type !== undefined) {
    query.eq("cuisine_type", groupFilters.cuisine_type);
  }
  if (groupFilters.atmosphere !== null && groupFilters.atmosphere !== undefined) {
    query.eq("atmosphere", groupFilters.atmosphere);
  }
  if (groupFilters.dining_experience !== null && groupFilters.dining_experience !== undefined) {
    query.eq("dining_experience", groupFilters.dining_experience);
  }
  

  //SOLO
  if (filters.venue_type !== null && filters.venue_type !== undefined) {
        query.eq("venue_type", filters.venue_type);
      }
      if (filters.time !== null && filters.time !== undefined) {
        query.eq("time", filters.time);
      }
      if (filters.cuisine_type !== null && filters.cuisine_type !== undefined) {
        query.eq("cuisine_type", filters.cuisine_type);
      }
      if (filters.atmosphere !== null && filters.atmosphere !== undefined) {
        query.eq("atmosphere", filters.atmosphere);
      }
      if (filters.dining_experience !== null && filters.dining_experience !== undefined) {
        query.eq("dining_experience", filters.dining_experience);
      }
  
      const { data, error } = await query;
  
      if (error) {
        setFetchError("Could not fetch venues");
        console.log(fetchError);
      }
      if (data) {
        setVenueData(data);
        setFetchError(null);
        console.log(data);
        console.log(`this is venueData: ${venueData}`)
      }
    };
  
    fetchData();
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentRound, filters, groupFilters, fetchError]);

  //this function is triggered by the next button on the results screen. SOLO
  function handleNextRound() {
    const currentOption = currentRound.find(
      (option) => option.id === selectedOption
    );
    const nextRoundID = currentOption.nextRoundID;
    if (nextRoundID === "") {
      navigate("/finalresult");
    } else {
      setCurrentRoundID(nextRoundID);
      setSelectedOption(null);
      navigate("/votescreen");
    }
  }

  //handle the GROUP round change and apply filters GROUP
  function handleNextGroupRound() {
    const currentOption = currentRound.find(
      (option) => option.name === CurrentGroupResult[0].choice
    );
    const nextRoundID = currentOption.nextRoundID;
    if (nextRoundID === "") {
      navigate("/groupfinalresult");
      console.log("LOOK HERE");
      console.log(`group filters:`)
      console.log(groupFilters)
      console.log("current round label:")
      console.log(CurrentRoundLabel)
      console.log("currentroundchoice");
      console.log(CurrentGroupResult[0].choice)
    } else {
      console.log("LOOK HERE");
      console.log(`group filters:`)
      console.log(groupFilters)
      console.log("current round label:")
      console.log(CurrentRoundLabel)
      console.log("currentroundchoice");
      console.log(CurrentGroupResult[0].choice)
      setCurrentRoundID(nextRoundID);
      setSelectedOption(null);
      navigate("/groupvotescreen");
    }
  }

  return (
    <Routes>
      <Route path="/" element={<Homepage setGroupMode={setGroupMode} />} />
      <Route path="/create-join" element={<CreateJoinGroup />} />
      <Route path="/join-group" element={<JoinGroup serverURL={serverURL} 
      setUserId={setUserId} 
      setGroupId={setGroupId}
      userid={userid}
      setGroupName={setGroupName}
      setGroupUsernames={setGroupUsernames}
      groupUsernames={groupUsernames}
      />
      } 
    />

<Route
        path="/groupvotescreen"
        element={
          <GroupVoteScreen
            setCurrentResult={setCurrentResult}
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
            rounds={rounds}
            setRounds={setRounds}
            currentRound={currentRound}
            setFilter={setFilter}
            currentResult={currentResult}
            setTheCurrentResult={setTheCurrentResult}
            currentRoundID={currentRoundID}
            userid={userid}
            groupid={groupid}
            serverURL={serverURL}
            venueData={venueData}
          />
        }
      />
<Route
        path="/groupresults"
        element={
          <GroupResults
            handleNextGroupRound={handleNextGroupRound}
            currentResult={currentResult}
            rounds={rounds}
            currentRoundID={currentRoundID}
            serverURL={serverURL}
            groupid={groupid}
            CurrentGroupResult={CurrentGroupResult}
            setCurrentGroupResult={setCurrentGroupResult}
            setCurrentRoundLabel={setCurrentRoundLabel}
            setGroupFilter={setGroupFilter}
          />
        }
      />

      <Route
        path="/votescreen"
        element={
          <VoteScreen
            setCurrentResult={setCurrentResult}
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
            rounds={rounds}
            setRounds={setRounds}
            currentRound={currentRound}
            setFilter={setFilter}
            currentResult={currentResult}
            setTheCurrentResult={setTheCurrentResult}
            currentRoundID={currentRoundID}
            venueData={venueData}
          />
        }
      />
      <Route
        path="/results"
        element={
          <Results
            handleNextRound={handleNextRound}
            currentResult={currentResult}
            rounds={rounds}
            currentRoundID={currentRoundID}
          />
        }
      />
      <Route
        path="/finalresult"
        element={
          <FinalResults venueData={venueData} handleRestart={handleRestart} />
        }
      />

<Route
        path="/groupfinalresult"
        element={
          <GroupFinalResults venueData={venueData} handleRestart={handleRestart} />
        }
      />



      <Route
        path="/prefilter"
        element={
          <PreFilter prefilters={prefilters} setpreFilters={setpreFilters} groupMode={groupMode} />
        }
      />
     
      <Route path="/creategroup" element={
      <CreateGroup serverURL={serverURL} 
                  userid={userid} 
                  setUserId={setUserId} 
                  setGroupId={setGroupId}
                  setGroupName={setGroupName}
                  groupUsernames={groupUsernames}   
                  setGroupUsernames={setGroupUsernames}
                  />} />

      <Route path="/lobby" element={
      <Lobby groupid={groupid} 
            groupName={groupName}
              groupUsernames={groupUsernames}
              setGroupUsernames = {setGroupUsernames}
              serverURL = {serverURL}
            />}  />
    </Routes>
  );
}

function Root() {
  return (
    <BrowserRouter>
      <RoundsProvider>
        <App />
      </RoundsProvider>
      {/* <PreFilterSVG /> */}
    </BrowserRouter>
  );
}

export default Root;
