import React from "react";

import { Link } from "react-router-dom";

import "./headerRegister.css";
import BackIcon from "../../../../Assets/img/backIcon.svg";
import CloseIcon from "../../../../Assets/img/closeIcon.svg";

const HeaderRegister = (props) => {
  return (
    <header className="headerLogin">
      <Link to={props.to}>
        <img
          src={BackIcon}
          alt=""
          className="headerLoginIcon"
          onClick={props.onClick}
        />
      </Link>

      <Link to="/">
        <img src={CloseIcon} alt="" className="headerLoginIcon" />
      </Link>
    </header>
  );
};

export default HeaderRegister;