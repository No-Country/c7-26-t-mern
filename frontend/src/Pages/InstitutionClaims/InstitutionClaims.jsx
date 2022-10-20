import React from "react";
import Card from "../../Components/Card/Card";
import { Link } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";
import "./institutionclaims.css";

const InstitutionClaims = () => {
  return (
    <>
      <div className="institutionClaimsContainer">
        <div className="appNotificationMenu">
          <Link to={"/list"} className="appNotificationIcon">
            <AiOutlineArrowLeft />
          </Link>
          <span className="appNotificationTextMenu">Reclamos</span>
        </div>
      </div>
      <Card />
    </>
  );
};

export default InstitutionClaims;