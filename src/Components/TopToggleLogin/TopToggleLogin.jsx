import React, { useState } from "react";
import "./toptogglelogin.css";

const TopToggle = (props) => {
  const [active, setActive] = useState("");

  const handleClick = (event) => {
    setActive(event.target.id);
  };

  return (
    <div className="topToggleLogin">
      <ul className="toggleLoginOptions">
        <li
          key={1}
          className={`optionLogin ${active === "1" ? "optionActive" : undefined}`}
          id={"1"}
          onClick={handleClick}
        >
          {props.option1}
        </li>
        <li
          key={2}
          style={{bodybackgroundColor: "red"}}
          className={`optionLogin institucion ${active === "2" ? "optionActive" : undefined}`}
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