import React from "react";
import logo from "../../../assets/img/reclami_squareLogo.svg";
import "./topnav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import Dropdown, { DropdownItem } from "../../Dropdown/Dropdown";
import { BiUserCircle } from "react-icons/bi";


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
        <FontAwesomeIcon icon={faEllipsisV} className="topNavIcon" />
        <Dropdown>
            <DropdownItem icon={<BiUserCircle/>}/>
            <DropdownItem icon="😀"/>
            <DropdownItem icon="😀"/>
        </Dropdown>
      </ul>
    </nav>
  );
};

export default TopNav;
