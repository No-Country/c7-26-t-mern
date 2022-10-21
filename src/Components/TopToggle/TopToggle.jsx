import React, { useState } from "react";
import "./topToggle.css";

const TopToggle = (props) => {
  const [active, setActive] = useState("1");

  const handleClick = (event) => {
    setActive(event.target.id);
  };

  return (
    <div className="topToggleContainer">
      <ul className="toggleOptions">
        <li
          key={1}
          className={`option ${active === "1" ? "optionActive" : undefined}`}
          id={"1"}
          onClick={handleClick}
        >
          {props.option1}
        </li>
        <li
          key={2}
          style={{bodybackgroundColor: "red"}}
          className={`option institucion ${active === "2" ? "optionActive" : undefined}`}
          id={"2"}
          onClick={handleClick}
        >
          {props.option2}
        </li>
      </ul>
    </div>
  );
};

export default TopToggle;
