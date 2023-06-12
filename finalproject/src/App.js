
import "./App.css";
import VoteScreen from "./pages//VoteScreen/VoteScreen";
import Results from "./pages/Results/Results";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import {useState} from "react"




function App() {
  const [roundCount, setRoundCount] = useState(0);
  const [rounds, setRounds] = useState([
    [
      { id: 1, name: 'resturant', score: 0 },
      { id: 2, name: 'cinema', score: 0 },
      { id: 3, name: 'bar', score: 0 },
    ],
    [
      { id: 4, name: 'mexican', score: 0 },
      { id: 5, name: 'chinese', score: 0 },
      { id: 6, name: 'italian', score: 0 },
    ],
    // ... Add more rounds with different options as needed
  ]);

  function handleNextRound(){
    setRoundCount(roundCount + 1);
  }



  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<VoteScreen rounds={rounds} setRounds={setRounds} roundCount={roundCount} />} />
        <Route path="/results" element={<Results handleNextRound={handleNextRound}/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
