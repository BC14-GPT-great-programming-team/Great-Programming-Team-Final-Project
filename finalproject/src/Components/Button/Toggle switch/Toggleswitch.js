import React, { useState } from "react";
import ReactSwitch from "react-switch";

function ToggleSwitch() {
  const [checked, setChecked] = useState(true);

  const handleChange = (val) => {
    setChecked(val);
  };

  return (
    <div className="toggleSwitch">
      <h4>Wheelchair accessible</h4>
      <ReactSwitch
        className="switch"
        checked={checked}
        onChange={handleChange}
      />
    </div>
  );
}

export default ToggleSwitch;
