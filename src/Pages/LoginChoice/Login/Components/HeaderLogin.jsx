import React from "react";

import { Link } from "react-router-dom";

import "./headerLogin.css";

import BackIcon from "../../../../assets/img/backIcon.svg";
import CloseIcon from "../../../../assets/img/closeIcon.svg";

const HeaderLogin = () => {
  return (
    <header className="headerLogin">
      <Link className="headerLogin-box-icon" to={-1}>
        <img src={BackIcon} alt="" className="headerLogin-icon" />
      </Link>

      <Link className="headerLogin-box-icon"  to={-1}>
        <img src={CloseIcon} alt="" className="headerLogin-icon" />
      </Link>
    </header>
  );
};

export default HeaderLogin;
