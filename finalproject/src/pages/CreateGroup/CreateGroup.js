import "./CreateGroup.css";
import Button from "../../Components/Button/Button";
import PreFilterSVG from "../PreFilterPage/PreFilterSVGGreen";

function CreateGroup() {
  return (
    <div className="CreateGroup">
      <input placeholder="Enter username"/> 
      <input placeholder="Enter group name"/> 


      <Button btnText="NEXT" />
      <PreFilterSVG />
    </div>
  );
  
}

export default CreateGroup;