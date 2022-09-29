import React from "react";
import logo from "../../../assets/img/reclamiSquareLogo.svg";
import "./topnav.css";
import Dropdown from "../../Dropdown/Dropdown";



const TopNav = () => {
  return (
    <nav className="topNav">
      <div className="topNavUser">
        <picture className="topNavLogo">
          <img src={logo} alt="" />
        </picture>
        <span className="topNavUserText">Hola, Moria!</span>
      </div>
      <ul>
        <Dropdown/>
      </ul>
    </nav>
  );
};

export default TopNav;
