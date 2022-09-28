import React from "react";
import logo from "../../assets/reclamiSquareLogo.svg";
import "./topnav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";

const TopNav = () => {
  return (
    <nav className="topNav">
      <div className="topNavUser">
        <picture className="topNavLogo">
          <img src={logo} alt="" />
        </picture>
        <span className="topNavUserText">Hola, Moria!</span>
      </div>
      <FontAwesomeIcon icon={faEllipsisV} className="topNavIcon" />
    </nav>
  );
};

export default TopNav;
