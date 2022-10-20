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
      style={{ backgroundColor: props.bg }}
      key={key}
      to={"/newClaim/asociateClaims"}
      state={{
        Title: "Reclamos Asociados",
        Theme: props,
        Institution: Institution(),
      }}
    >
      <div className="themeColor">
        <p className="themeTitle">{props.title}</p>
      </div>
    </Link>
  );
};

export default ThemeCard;
