import React from "react";

import { Link } from "react-router-dom";
import "./formPersonal.css";

import InputField from "../../../../../Components/InputField/InputField";
import PrimaryButton from "../../../../../Components/PrimaryButton/PrimaryButton";
import HeaderRegister from "../HeaderRegister";
import LogoRounded from "../../../../../Components/LogoRounded/LogoRounded";

const FormPersonal = (props) => {
  const next = (e) => {
    e.preventDefault();
    // BACKEND
    props.nextStep();
  };

  let buttonHandlerColor = (props.values["dni"] === "" || props.values["name"] === "")

  return (
    <React.Fragment>
        <InputField
          type={"text"}
          label={"Nombre Completo"}
          onChange={props.handleChange("name")}
          defaultValue={props.values.name}
        />
        <InputField
          type={"text"}
          label={"DNI"}
          onChange={props.handleChange("dni")}
          defaultValue={props.values.dni}
        />
        <PrimaryButton
          text="Siguiente"
          bg={buttonHandlerColor ? "#8E938D" : "#8f0000"}
          color="#F0F0F0"
          onClick={next}
          disabled= {buttonHandlerColor ? "false" : ""}
        />
    </React.Fragment>
  );
};

export default FormPersonal;
