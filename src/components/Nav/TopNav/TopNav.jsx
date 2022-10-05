import React from "react";
import logo from "../../../assets/img/reclamiSquareLogo.svg";
import "./topnav.css";
import Dropdown from "../../Dropdown/Dropdown";
import { Link } from 'react-router-dom';
import NotificationSvg from "../../../assets/img/notificacion.svg";


const TopNav = () => {
  return (
    <nav className="topNav">
      <div className="topNavUser">
        <picture className="topNavLogo">
          <img src={logo} alt="" />
        </picture>
        <span className="topNavUserText">Hola, Moria!</span>
      </div>
      <ul className="topNavList">
      <Link to={"/notifications"} className="notificationIcon"><img src={NotificationSvg} alt="" /></Link>
        <Dropdown />
      </ul>
    </nav>
  );
};

export default TopNav;
