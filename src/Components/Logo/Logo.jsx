import React from "react";

import "./logo.css";
import logoLogin from "../../Assets/img/logo.svg";


const Logo = () => {
  return (
    <img src={logoLogin} className="logo" alt="Aplication"></img>
  );
};

export default Logo;