/* Component for Home Button */
import "./HomeButton.css";
import { FaHome } from "react-icons/fa";


function HomeButton({handleHome}) {
  
  const handleClick = () => {
    const confirmed = window.confirm("Votes & username will be reset - are you sure you want to go back? ");
    if (confirmed) {
      handleHome();
    }
  };
  
  return (
    <button className="homeBtn" onClick={handleClick}>
      <FaHome />
    </button>
  );
}

export default HomeButton;
