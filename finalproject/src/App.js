
import "./App.css";
import VoteScreen from "./pages//VoteScreen/VoteScreen";
import { BrowserRouter, Routes, Route } from "react-router-dom"




function App() {

  const [rounds, setRounds] = useState([
    [
      { id: 1, name: 'Option 1', score: 0 },
      { id: 2, name: 'Option 2', score: 0 },
      { id: 3, name: 'Option 3', score: 0 },
    ],
    // ... Add more rounds with different options as needed
  ]);




  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<VoteScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
