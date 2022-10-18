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
            color: isActive ? "#ffe9ac" : "#fff",
            fill: isActive ? "#ffe9ac" : "#fff",
          })}
        >
          <div className="botNavContainerItem">
            <BsFillHouseFill size={20} alt="" />
            <p className="botNavContainerItemText">Inicio</p>
          </div>
        </NavLink>

        <Link to="/newClaim/institution" state={{ Title: "Institución" }}>
          <div className="botNavContainerItem botNavContainerItemCenter">
            <AiOutlinePlus size={20} alt="" />
          </div>
        </Link>

        <NavLink
          to="/myClaims"
          style={({ isActive }) => ({
            color: isActive ? "#ffe9ac" : "#fff",
            fill: isActive ? "#ffe9ac" : "#fff",
          })}
        >
          <div className="botNavContainerItem">
            <img
              className="botNavContainerItemImg"
              src={iconClaims}
              alt="Reclamos"
            />
            <p className="botNavContainerItemText"> Mis Reclamos</p>
          </div>
        </NavLink>
      </nav>
    </section>
  );
}
export default BotNav;
