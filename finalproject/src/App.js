import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

// Import Pages
import Homepage from "./pages/Homepage/Hompage.js";
import CreateJoinGroup from "./pages/CreateJoin/CreateJoin.js";
import JoinGroup from "./pages/JoinGroup/JoinGroup";

//      ❗DO NOT EDIT THIS BRANCH❗

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route
          path="/create-join"
          element={<CreateJoinGroup />}
      
        />
        <Route path="/join-group" element={<JoinGroup/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
