import "./CreateGroup.css";
import Button from "../../Components/Button/Button";
import PreFilterSVG from "../PreFilterPage/PreFilterSVGGreen";
import { Link } from "react-router-dom";
import {useState} from "react";

function CreateGroup() {




  return (
    <div className="CreateGroup">
      <input placeholder="Enter username"/> 
      <input placeholder="Enter group name"/> 

<Link to="/lobby">
      <Button btnText="NEXT" />
</Link>
      <PreFilterSVG />
    </div>
  );
  
}

export default CreateGroup;