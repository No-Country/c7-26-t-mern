import React from "react";

import "./inputField.css";

const InputField = (props) => {
  return (
    <div className={`inputBox`}>
      <input
        className="inputBoxInput"
        type={props.type}
        id={props.type}
        placeholder={props.label}
        onChange={props.onChange}
        defaultValue={props.defaultValue}
        name={props.name}
        required="required"
      />
      <label>{props.label}</label>
    </div>
  );
};

export default InputField;
