
import React from "react";

import "./inputField.css";

const InputField = (props) => {
  return (
    <div className={`input-box ${props.class}`}>
      
      <input className="input-box-input" type={props.type} id={props.type} placeholder={props.label} onChange={props.onChange } defaultValue={props.defaultValue}/>
      <label>{props.label}</label>
    </div>
  );
};

export default InputField;