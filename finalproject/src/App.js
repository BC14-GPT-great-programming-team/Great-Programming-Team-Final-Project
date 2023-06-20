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
// Green dynamic background can be applied to every page with below

function App() {


//comment out the below line for deployment
// const serverURL = "http://localhost:8888/.netlify/functions/votehandler";
//comment out the below line for testing
 const serverURL = "https://consensusgpt.netlify.app/.netlify/functions/votehandler";



  //this is the initial state of the rounds. It is passed down to the vote screen and used to display the options.
  const initialRounds = useRounds();
  const [userid, setUserId] = useState(null);
  const [groupid, setGroupId] = useState(null);
  const [groupName, setGroupName] = useState("");
  const [groupUsernames, setGroupUsernames] = useState([]);
  const navigate = useNavigate();
  //selectedOption gets set to the id of the option that the user has selected.
  const [selectedOption, setSelectedOption] = useState(null);
  const [currentRoundID, setCurrentRoundID] = useState("An Activity");
  //this is selected option name that is passed down to the results page and displayed.
  const [currentResult, setTheCurrentResult] = useState(null);

  // useState for setting the error when fetching data from Supabase
  const [fetchError, setFetchError] = useState(null);
  //useState for setting the venues data that is fetched from Supabase
  const [venueData, setVenueData] = useState(null);

  //REMEMBER FOR LATER - FILTER FOR OUTDOOR/INDOOR?
  //this is the array of rounds that is used to display the options on the vote screen. The score is used to determine which option has been selected. The roundLabel is used to determine which filter to apply to the data from supabase.
  const [rounds, setRounds] = useState(initialRounds);

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
    cost_rating: null,
  });

  //When you click on a button the function below is triggered. It takes in the option name and the value of the option. It then sets the filters state to the option name and value. This is then passed down to the vote screen and used to filter the data from supabase.

  function setFilter(optionName, value) {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [optionName]: value,
    }));
  }

  // function is triggered by Restart button on the final Results page and it resets everything to the initial state.
  function handleRestart() {
    setFilters({
      venue_type: null,
      cuisine_type: null,
      cost_rating: null,
    });
    setSelectedOption(null);
    setCurrentRoundID("An Activity");
    setTheCurrentResult(null);
    navigate("/");
    setRounds(initialRounds);
  }

  //this function is called in the vote screen by the handleVote function which is called by the option buttons on the vote screen. It takes in the option name and sets the current result state to the option name. This is then passed down to the results page and displayed.
  function setCurrentResult(optionname) {
    setTheCurrentResult(optionname);
  }

  //this is the call to supabase
  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase
        .from("venues")
        .select()
        .eq("venue_type", filters.venue_type)
        .eq("cuisine_type", filters.cuisine_type);

      if (error) {
        setFetchError("could not fetch venues");

        console.log(fetchError);
      }
      if (data) {
        setVenueData(data);
        setFetchError(null);
        console.log(data);
      }
    };
    fetchData();
  }, [currentRound, filters, fetchError]);

  //this function is triggered by the next button on the results screen.
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

  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
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
          />
        }
      />
      <Route
        path="/results"
        element={
          <Results
            handleNextRound={handleNextRound}
            currentResult={currentResult}
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
        path="/prefilter"
        element={
          <PreFilter prefilters={prefilters} setpreFilters={setpreFilters} />
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
