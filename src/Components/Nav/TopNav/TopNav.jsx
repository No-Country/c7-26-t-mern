import React from "react";
import logo from "../../../Assets/img/reclamiNewLogo.svg";
import "./topnav.css";
import { Link } from "react-router-dom";

import NotificationSvg from "../../../Assets/img/notificacion.svg";
// import SearchBarNav from "./SearchBarNav";
import { AvatarIcon } from "../../AvatarIcon/AvatarIcon";

const TopNav = (props) => {
  return (
    <nav className="topNav">
        <Link to={"/profile"}>
          <AvatarIcon />
        </Link>
      <div className="topNavUser">
        <Link to={"/home"}>
          <picture className="topNavLogo">
            <img src={logo} alt="logo" />
          </picture>
        </Link>
        {/* <SearchBarNav /> */}
      </div>
      <ul className="topNavListDesktopContainer">
        <div className="topNavListDesktop">
          <Link className="topNavListLinks">TENDENCIAS</Link>
          <Link className="topNavListLinks">COMUNIDAD</Link>
          <Link className="topNavListLinks">MIS RECLAMOS</Link>
        </div>
      </ul>
      <ul className="topNavList">
        <Link to={"/notifications"} className="notificationIcon">
          <img src={NotificationSvg} alt="" />
        </Link>
      </ul>
    </nav>
  );
};

export default TopNav;
