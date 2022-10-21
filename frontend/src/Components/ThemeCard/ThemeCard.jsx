import React from "react";
import "./themecard.css";
import { Link, useLocation } from "react-router-dom";

const ThemeCard = (props, key) => {
  function Institution() {
    const location = useLocation();
    try {
      const { Institution } = location.state;
      return Institution;
    } catch (err) {
      return "Default";
    }
  }

  return (
    <Link
      className="themeCardContainer"
      key={key}
      to={"/newClaim/claim"}
      state={{
        Title: "Nuevo Reclamo",
        Theme: props,
        Institution: Institution(),
      }}
    >
      <img className="themeImg" src={props.url} alt="" />
      <p className="themeTitle">{props.name}</p>
      <div className="blurImg"></div>
    </Link>
  );
};

export default ThemeCard;
