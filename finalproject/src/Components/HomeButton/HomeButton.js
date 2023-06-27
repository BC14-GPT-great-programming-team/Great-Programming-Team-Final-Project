/* Component for Home Button */
import "./HomeButton.css";
import { FaHome } from "react-icons/fa";


function HomeButton({handleHome}) {
  
  return (
    <button className="homeBtn" onClick={handleHome}>
      <FaHome />
    </button>
  );
}

export default HomeButton;
