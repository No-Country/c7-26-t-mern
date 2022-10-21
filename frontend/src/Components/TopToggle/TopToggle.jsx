import React, { useState } from "react";
import "./topToggle.css";

const TopToggle = ({ handleClick, option1, option2, option }) => {
  let active = option;

  return (
    <div className="topToggleContainer">
      <ul className="toggleOptions">
        <li
          key={1}
          className={`option ${active === "1" ? "optionActive" : undefined}`}
          id={"1"}
          onClick={handleClick}
        >
          {option1}
        </li>
        <li
          key={2}
          className={`option ${active === "2" ? "optionActive" : undefined}`}
          id={"2"}
          onClick={handleClick}
        >
          {option2}
        </li>
      </ul>
    </div>
  );
};
export default TopToggle;
