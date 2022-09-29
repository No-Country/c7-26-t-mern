import React from "react";

import { Link } from "react-router-dom"
import "./formPersonal.css";

import InputField from "../../../../../Components/InputField/InputField";
import PrimaryButton from "../../../../../Components/PrimaryButton/PrimaryButton";

const FormPersonal = (props) => {
  const next = (e) => {
    e.preventDefault();
    // BACKEND
    props.nextStep();
  };

  return (
    <React.Fragment>
      <InputField
        type={"text"}
        label={"Nombre Completo"}
        onChange={props.handleChange("name")}
      />
      <InputField
        type={"text"}
        label={"DNI"}
        onChange={props.handleChange("dni")}
      />
      <Link to="/home"><PrimaryButton text="Siguiente" bg="#8E938D" color="#F0F0F0" onClick={next}/></Link>
    </React.Fragment>
  );
};

export default FormPersonal;
