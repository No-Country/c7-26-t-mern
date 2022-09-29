import React from "react";

import "./formCredentials.css";
import { Link } from "react-router-dom";

import InputField from "../../../../../Components/InputField/InputField";
import PrimaryButton from "../../../../../Components/PrimaryButton/PrimaryButton";

const FormCredentials = (props) => {
  const next = (e) => {
    e.preventDefault();
    // BACKEND
    props.nextStep();
  };

  return (
    <React.Fragment>
      <InputField
        type={"text"}
        label={"Correo electronico"}
        onChange={props.handleChange("email")}
      />
      <InputField
        type={"password"}
        label={"Contraseña"}
        onChange={props.handleChange("password")}
      />
      <InputField
        type={"password"}
        label={"Repita la contraseña"}
        onChange={props.handleChange("passwordRepited")}
      />

      <PrimaryButton text="Siguiente" bg="#8E938D" color="#F0F0F0" to="/home" />
    </React.Fragment>
  );
};

export default FormCredentials;
