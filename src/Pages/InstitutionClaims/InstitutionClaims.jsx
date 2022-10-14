import React from "react";
import Card from "../../Components/Card/Card";
import { Link } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";

const InstitutionClaims = () => {
  return (
    <>
      <div className="appNotificationContainer">
        <div className="appNotificationMenu">
          <Link to={"/home"} className="appNotificationIcon">
            <AiOutlineArrowLeft />
          </Link>
          <span className="appNotificationTextMenu">Notificaciones</span>
        </div>
      </div>
      <Card />
    </>
  );
};

export default InstitutionClaims;
