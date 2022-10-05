import React from "react";
import "./buttonclaim.css";
import { Link } from "react-router-dom";

const ButtonClaim = () => {
  return (
    <div className="buttonClaim">
      <Link to={"/themelist"} className="buttonAddClaim">
        + Nuevo reclamo
      </Link>
    </div>
  );
};

export default ButtonClaim;
