import React, { useContext, useState } from "react";
import { ClaimmerProvider } from "../../../src/context/context";

//import axios
import axios from "axios";

import "./primaryButton.css";
import { Link } from "react-router-dom";

const PrimaryButton = (prop) => {
  return (
    <Link
      className="primaryButton"
      style={{
        backgroundColor: prop.bg,
        color: prop.color,
        pointerEvents: prop.disabled ? "none" : "",
      }}
      onClick={() => {
        prop.onClick();
      }}
      to={prop.to}
    >
      {prop.text}
    </Link>
  );
};

export default PrimaryButton;
