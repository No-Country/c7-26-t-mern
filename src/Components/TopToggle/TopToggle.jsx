import React, { useState } from "react";
import "./topToggle.css";

const TopToggle = (props) => {
  const [toogle, setToogle] = "";

  function changeStatus(e) {
    console.log(e.target);
    // if (target.e.toggle === "active") {
    //   console.log("hola");
    // } else {
    //   console.log("chau");
    // }
  }

  return (
    <div className="topToggleContainer">
      <ul className="toggleOptions">
        <li toggle="active" onClick={changeStatus} className="option option1">
          {props.option1}
        </li>
        <li toggle="inactive" onClick={changeStatus} className="option option2">
          {props.option2}
        </li>
      </ul>
      <div
        toggle="active"
        className="bottomAnimatedBar bABActive bABInactive"
      ></div>
    </div>
  );
};

export default TopToggle;
