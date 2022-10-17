import React from "react";
import "./themecard.css";

const ThemeCard = (props, key) => {
  return (
    <div className="themeCardContainer" key={key}>
      <img className="themeImg" src={props.url} alt="" />
      <p className="themeTitle">{props.title}</p>
      <div className="blurImg"></div>
    </div>
  );
};

export default ThemeCard;
