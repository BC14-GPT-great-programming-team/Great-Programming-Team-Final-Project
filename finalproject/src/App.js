import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

// Import Pages
import Homepage from "./pages/Homepage/Hompage";
import CreateJoinGroup from "./pages/CreateJoin/CreateJoin";

//      ❗DO NOT EDIT THIS BRANCH❗

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route
          path="./pages/CreateJoin/CreateJoin.js"
          element={<CreateJoinGroup />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
