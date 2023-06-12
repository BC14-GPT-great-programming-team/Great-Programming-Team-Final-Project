import logo from "./logo.svg";
import "./App.css";
import VoteScreen from "./pages//VoteScreen/VoteScreen";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"




function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<VoteScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
