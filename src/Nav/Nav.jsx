import React, { useState } from "react";
import "./nav.css";
import {
  BsGeoAltFill,
  BsFillHouseFill,
  BsFillPeopleFill,
  BsExclamationCircleFill,
} from "react-icons/bs";

function Nav() {
  const [selected, setSelected] = useState(0);

  const menus = [
    {
      icon: <BsFillHouseFill size={25} />,
      name: "Home",
    },
    {
      icon: <BsGeoAltFill size={25} />,
      name: "Map",
    },
    {
      icon: <BsFillPeopleFill size={25} />,
      name: "Comunity",
    },
    {
      icon: <BsExclamationCircleFill size={25} />,
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
export default Nav;
