import React from "react";
import "./nav.css";
import { BsFillHouseFill } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

// Icons bottom navbar
import iconClaims from "../../../Assets/img/claimsInactive.svg";

function BotNav() {
  return (
    <section className="botNav">
      <nav className="botNavContainer">
        <NavLink
          to="/home"
          style={({ isActive }) => ({
            color: isActive ? "#ff0" : "#fff",
            background: isActive ? "#ff0" : "#fff",
          })}
        >
          <div className="botNavContainerItem">
            <BsFillHouseFill size={20} alt="" />
            <p className="botNavContainerItemText">Inicio</p>
          </div>
        </NavLink>

        <div className="botNavContainerItem botNavContainerItemCenter">
          <AiOutlinePlus size={20} alt="" />
        </div>

        <NavLink
          to="/home"
          style={({ isActive }) => ({
            color: isActive ? "#ff0" : "#fff",
            fill: isActive ? "#ff0" : "#fff",
          })}
        >
          <div className="botNavContainerItem">
            <img
              className="botNavContainerItemImg"
              src={iconClaims}
              alt="Profile"
            />
            <p className="botNavContainerItemText">Perfil</p>
          </div>
        </NavLink>
      </nav>
    </section>
  );
}
export default BotNav;
