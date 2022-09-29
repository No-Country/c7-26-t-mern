import React from "react";

import { Link } from "react-router-dom";
import "./formCredentials.css";

import InputField from "../../../../../Components/InputField/InputField";
import PrimaryButton from "../../../../../Components/PrimaryButton/PrimaryButton";
import HeaderRegister from "../HeaderRegister";
import LogoRounded from "../../../../../Components/LogoRounded/LogoRounded";

const FormCredentials = (props) => {
  const next = (e) => {
    e.preventDefault();
    // BACKEND
    props.nextStep();
  };

  let buttonHandlerColor =
    props.values["email"] === "" ||
    props.values["password"] === "" ||
    props.values["passwordRepited"] === "";

  return (
    <React.Fragment>
      <InputField
        type={"text"}
        label={"Correo Electronico"}
        onChange={props.handleChange("email")}
        defaultValue={props.values.email}
      />
      <InputField
        type={"password"}
        label={"Contraseña"}
        onChange={props.handleChange("password")}
        defaultValue={props.values.password}
      />
      <InputField
        type={"password"}
        label={"Repita la contraseña"}
        onChange={props.handleChange("passwordRepited")}
        defaultValue={props.values.passwordRepited}
      />
      <PrimaryButton
        text="Siguiente"
        bg={buttonHandlerColor ? "#8E938D" : "#8f0000"}
        color="#F0F0F0"
        to="/home"
        disabled={buttonHandlerColor ? "false" : ""}
      />
    </React.Fragment>
  );
};

export default FormCredentials;
