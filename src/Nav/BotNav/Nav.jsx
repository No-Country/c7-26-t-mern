import React, { useState } from "react";
import "./nav.css";
import {
  BsGeoAltFill,
  BsFillHouseFill,
  BsFillPeopleFill,
  BsExclamationCircleFill,
} from "react-icons/bs";

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
      icon: <BsFillPeopleFill size={20} />,
      name: "Comunity",
    },
    {
      icon: <BsExclamationCircleFill size={20} />,
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
