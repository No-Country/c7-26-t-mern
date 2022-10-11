import React from "react";
import logo from "../../../assets/img/reclamiSquareLogo.svg";
import "./topnav.css";
import Dropdown from "../../Dropdown/Dropdown";
import { Link } from 'react-router-dom';
import NotificationSvg from "../../../assets/img/notificacion.svg";
import SearchBarNav from "./SearchBarNav";


const TopNav = () => {
  return (
    <nav className="topNav">
      <div className="topNavUser">
        <Link to={"/home"}>
          <picture className="topNavLogo">
            <img src={logo} alt="" />
          </picture>
        </Link>
        <span className="topNavUserText">Hola, Moria!</span>
        <SearchBarNav />
      </div>
      <ul className="topNavListDesktopContainer">
        <div className="topNavListDesktop">
          <Link className="topNavListLinks">TENDENCIAS</Link>
          <Link className="topNavListLinks">COMUNIDAD</Link>
          <Link className="topNavListLinks">MIS RECLAMOS</Link>
        </div>
      </ul>
      <ul className="topNavList">
        <Link to={"/notifications"} className="notificationIcon"><img src={NotificationSvg} alt="" /></Link>
        <Dropdown />
      </ul>
    </nav>
  );
};

export default TopNav;
