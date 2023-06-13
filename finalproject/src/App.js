import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";
import VoteScreen from "./pages//VoteScreen/VoteScreen";
import Results from "./pages/Results/Results";
import { useState } from "react";
import Homepage from "./pages/Homepage/Hompage.js";
import CreateJoinGroup from "./pages/CreateJoin/CreateJoin.js";
import JoinGroup from "./pages/JoinGroup/JoinGroup";

function App() {
  const navigate = useNavigate();
  // useState for setting the round count in the currentRound variable in VoteScreen.js
  const [roundCount, setRoundCount] = useState(0);

  const [rounds, setRounds] = useState([
    [
      { id: 1, name: "Restaurant", score: 0 },
      { id: 2, name: "Cinema", score: 0 },
      { id: 3, name: "Bar", score: 0 },
    ],
    [
      { id: 4, name: "Mexican", score: 0 },
      { id: 5, name: "Chinese", score: 0 },
      { id: 6, name: "Italian", score: 0 },
      { id: 7, name: "Indian", score: 0 },
      { id: 8, name: "Burger", score: 0 },
      { id: 9, name: "Thai", score: 0 },
    ],
    [
      { id: 10, name: "£", score: 0 },
      { id: 11, name: "££", score: 0 },
      { id: 12, name: "£££", score: 0 },
    ]
    
    // ... Add more rounds with different options as needed
    //... the rounds pathways can possibly be traversed by creating round blocks. The block that is selected in the first round will determine the following index of the array to be used in the next round (inside the roundCount) and all subsequent rounds will simply be adding 1 to the round count - to end the rounds and display the very final result page, we will need to add a conditional statement that will check if the round count is equal to the index of the last round in the array for that pathway. If it is, then the results page will be displayed, if not, then the next round will be displayed. (eg. restaurant pathway, round 1: restaurant, cinema, bar. round 2: mexican, chinese, italian, indian, burger, thai. round 3: £, ££, £££. round 4: results page.)
  ]);

  //this function is passed down to the results page and is triggered by the next button. It adds 1 to the round count which will then be used to determine which round is displayed in the vote screen.
  function handleNextRound() {
    
    if (roundCount === rounds.length - 1) {
      navigate("/");
    } else{
      setRoundCount(roundCount + 1);
      navigate("/votescreen");
    }
  }

  return (

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/create-join" element={<CreateJoinGroup />} />
        <Route path="/join-group" element={<JoinGroup />} />

        <Route
          path="/votescreen"
          element={
            <VoteScreen
              rounds={rounds}
              setRounds={setRounds}
              roundCount={roundCount}
            />
          }
        />
        <Route
          path="/results"
          element={
            <Results
              handleNextRound={handleNextRound}
              rounds={rounds}
              roundCount={roundCount}
            />
          }
        />
      </Routes>
    
  );
}

function Root() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

export default Root;

