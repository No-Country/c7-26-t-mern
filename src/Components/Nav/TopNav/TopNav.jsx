import React from "react";
import logo from "../../../Assets/img/reclamiNewLogo.svg";
import "./topnav.css";
import { Link } from "react-router-dom";
import NotificationSvg from "../../../Assets/img/notificacion.svg";
import { AvatarIcon } from "../../AvatarIcon/AvatarIcon";
import '../../AppNotification/notification.css'

const TopNav = (props) => {
  return (
    <div className="topNavHeader">
    <nav className={props.className}>
      <Link to={"/profile"}>
        <AvatarIcon />
      </Link>

      <div className="topNavUser">
        <Link to={"/home"}>
          <picture className="topNavLogo">
            <img src={logo} alt="logo" />
          </picture>
        </Link>
      </div>

      <ul className="topNavListDesktopContainer">
        <div className="topNavListDesktop">
          <Link className="topNavListLinks">MIS RECLAMOS</Link>
          <Link to={'/newClaim/institution'}>
          <button className="newClaimButtonNav">HACER RECLAMO</button>
          </Link>
        </div>
      </ul>
      
      <ul className="topNavList">
        <Link to={"/notifications"} className="notificationIcon">
          <img src={NotificationSvg} alt="" />
        </Link>
      </ul>
      
    </nav>
    </div>
  );
};

export default TopNav;
