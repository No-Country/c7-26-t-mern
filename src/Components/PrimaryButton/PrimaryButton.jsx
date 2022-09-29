import React from "react";

import "./primaryButton.css";
import { Link } from "react-router-dom";

const PrimaryButton = (prop) => {
  return <Link className="primary-button" style={{backgroundColor: prop.bg, color: prop.color}} to={prop.to} onClick={prop.onClick}>{prop.text}</Link>;
};

export default PrimaryButton;
