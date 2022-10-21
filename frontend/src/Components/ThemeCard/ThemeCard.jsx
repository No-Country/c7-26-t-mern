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
<<<<<<< HEAD:frontend/src/Components/ThemeCard/ThemeCard.jsx
      key={key}
      to={"/newClaim/claim"}
      state={{
        Title: "Nuevo Reclamo",
=======
      style={{ backgroundColor: props.bg, pointerEvents: props.link === true ? "" : "none"  }}
      key={key}
      to={"/newClaim/asociateClaims"}
      state={{
        Title: "Reclamos Asociados",
>>>>>>> bc6de52abe893d0c1b0b479bc05dc68f1580f556:src/Components/ThemeCard/ThemeCard.jsx
        Theme: props,
        Institution: Institution(),
      }}
    >
<<<<<<< HEAD:frontend/src/Components/ThemeCard/ThemeCard.jsx
      <img className="themeImg" src={props.url} alt="" />
      <p className="themeTitle">{props.name}</p>
      <div className="blurImg"></div>
=======
      <div className="themeColor">
        <p className="themeTitle">{props.title}</p>
      </div>
>>>>>>> bc6de52abe893d0c1b0b479bc05dc68f1580f556:src/Components/ThemeCard/ThemeCard.jsx
    </Link>
  );
};

export default ThemeCard;
