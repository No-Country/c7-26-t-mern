import React from "react";

import "./primaryButton.css";
import { Link } from "react-router-dom";

const PrimaryButton = (props) => {
  return (
    <Link
      className={`primaryButton ${props.className}`}
      style={{
        backgroundColor: props.bg,
        color: props.color,
        pointerEvents: props.disabled ? "none" : "",
      }}
      to={props.to}
      onClick={props.onClick}
      state={props.state}
    >
      {props.text}
    </Link>
  );
};

export default PrimaryButton;
