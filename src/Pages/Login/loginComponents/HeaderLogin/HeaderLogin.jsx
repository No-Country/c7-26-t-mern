import React from "react";

import { Link } from "react-router-dom";

import "./headerLogin.css";

import BackIcon from "../../../../assets/img/backIcon.svg";
import CloseIcon from "../../../../assets/img/closeIcon.svg";

const HeaderLogin = () => {
  return (
    <header className="headerLogin">
      <Link className="headerLoginBoxIcon" to="/">
        <img src={BackIcon} alt="" className="headerLoginIcon" />
      </Link>

      <Link className="headerLoginBoxIcon" to="/">
        <img src={CloseIcon} alt="" className="headerLoginIcon" />
      </Link>
    </header>
  );
};

export default HeaderLogin;
