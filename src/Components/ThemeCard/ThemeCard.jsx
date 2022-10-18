import React from "react";
import "./themecard.css";
import { Link } from "react-router-dom";

const ThemeCard = (props, key) => {
  return (
    <Link className="themeCardContainer" key={key} to={"/newClaim/claim"} state={{ Title: "Nuevo Reclamo"}}> 
      <img className="themeImg" src={props.url} alt="" />
      <p className="themeTitle">{props.title}</p>
      <div className="blurImg"></div>
    </Link>
  );
};

export default ThemeCard;
