import React from "react";

import { Link } from "react-router-dom";

import "./headerRegister.css";
import BackIcon from "../../../../assets/img/backIcon.svg";
import CloseIcon from "../../../../assets/img/closeIcon.svg";

const HeaderLogin = (props) => {
  return (
    <header className="headerLogin">
      <Link to={props.to}>
        <img src={BackIcon} alt="" className="headerLogin-icon" onClick={props.onClick}/>
      </Link>

        <Link to="/"><img src={CloseIcon} alt="" className="headerLogin-icon" /></Link>
        
    </header>
  );
};

export default HeaderLogin;
