import React, { useState } from "react";
import "./nav.css";
import { BsGeoAltFill, BsFillHouseFill } from "react-icons/bs";

// Icons bottom navbar
import iconCommunity from "../../../assets/communityInactive.svg";
import iconClaims from "../../../assets/claimsInactive.svg";

function BotNav() {
  const [selected, setSelected] = useState(0);

  const menus = [
    {
      icon: <BsFillHouseFill size={20} />,
      name: "Home",
    },
    {
      icon: <BsGeoAltFill size={20} />,
      name: "Map",
    },
    {
      icon: <img src={iconCommunity} alt="" size={20} />,
      name: "Community",
    },
    {
      icon: <img src={iconClaims} alt="" size={20} />,
      name: "Claims",
    },
  ];

  return (
    <div className="navigation">
      <ul>
        {menus.map((val, index) => {
          return (
            <li
              onClick={() => setSelected(index)}
              key={index}
              className={index === selected ? "active" : ""}
            >
              <div className="icon">{val.icon}</div>
              <div className="name">{val.name}</div>
            </li>
          );
        })}
        <div className="menu-bg" />
      </ul>
    </div>
  );
}
export default BotNav;
