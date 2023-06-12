import "./JoinGroup.css";
import Button from "../../Components/Button/Button";

function JoinGroup() {
  return (
    <div className="JoinGroup">
      <input placeholder="Enter Code"/> 
      <input placeholder="Enter Name"/> 


      <Button btnText="NEXT" />
    </div>
  );
}

export default JoinGroup;