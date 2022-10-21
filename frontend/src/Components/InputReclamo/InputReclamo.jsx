import React from "react";

import "./inputreclamo.css";

const InputReclamo = (props) => {
  return (
    <div className={`inputBoxReclamo`}>
      <input
        className={props.className}
        type={props.type}
        id={props.type}
        placeholder={props.label}
        onChange={props.onChange}
        defaultValue={props.defaultValue}
        name={props.name}
        required="required"
        readOnly={props.readOnly}
      />
      <label>{props.label}</label>
    </div>
  );
};

export default InputReclamo;
