// Component for Button

import "./Button.css";

function Button(props) {
  return <button className={props.className}>{props.btnText}</button>;
}

export default Button;
