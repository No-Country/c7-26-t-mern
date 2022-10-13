import React, { useState } from "react";
import "./inputField.css";

const InputField = (props) => {
  return (
    <div className={`inputBox`}>
      <input
        className="inputBoxInput"
        type={props.type}
        placeholder={props.label}
        onChange={props.onChange}
        defaultValue={props.value}
      />
      <label>{props.label}</label>
    </div>
  );
};

export default InputField;
