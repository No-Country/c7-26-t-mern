import React from "react";

import "./inputField.css";

const InputField = (props) => {
  return (
    <div className={`inputBox ${props.class}`}>
      <input
        className="inputBoxInput"
        type={props.type}
        id={props.type}
        placeholder={props.label}
        onChange={props.onChange}
        defaultValue={props.defaultValue}
      />
      <label>{props.label}</label>
    </div>
  );
};

export default InputField;
