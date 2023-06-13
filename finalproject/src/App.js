
import { BrowserRouter, Routes, Route } from "react-router-dom";

import VoteScreen from "./pages//VoteScreen/VoteScreen";
import Results from "./pages/Results/Results";
import {useState} from "react"
import Homepage from "./pages/Homepage/Hompage.js";
import CreateJoinGroup from "./pages/CreateJoin/CreateJoin.js";
import JoinGroup from "./pages/JoinGroup/JoinGroup";
import PreFilter from "./pages/PreFilterPage/PreFilterPage.js";


function App() {
  // useState for setting the round count in the currentRound variable in VoteScreen.js
  const [roundCount, setRoundCount] = useState(0);
  
  const [rounds, setRounds] = useState([
    [
      { id: 1, name: 'Restaurant', score: 0 },
      { id: 2, name: 'Cinema', score: 0 },
      { id: 3, name: 'Bar', score: 0 },
    ],
    [
      { id: 4, name: 'Mexican', score: 0 },
      { id: 5, name: 'Chinese', score: 0 },
      { id: 6, name: 'Italian', score: 0 },
      { id: 7, name: 'Indian', score: 0 },
      { id: 8, name: 'Burger', score: 0 },
      { id: 9, name: 'Thai', score: 0 },
    ],
    [
      { id: 10, name: '£', score: 0 },
      { id:11, name: '££', score: 0 },
      { id: 12, name: '£££', score: 0 },
    ],
    // ... Add more rounds with different options as needed
  ]);

  function handleNextRound(){
    setRoundCount(roundCount + 1);
  }



  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/create-join" element={<CreateJoinGroup />} />
        <Route path="/join-group" element={<JoinGroup />} />
        <Route path="/prefilter" element={<PreFilter />} />
        <Route path="/votescreen" element={<VoteScreen rounds={rounds} setRounds={setRounds} roundCount={roundCount} />} />
        <Route path="/results" element={<Results handleNextRound={handleNextRound} rounds={rounds}/>} />


      </Routes>
    </BrowserRouter>
  );
}

export default App;
