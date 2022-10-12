import React from "react";

import InputField from "../../../../Components/InputField/InputField";
import PrimaryButton from "../../../../Components/PrimaryButton/PrimaryButton";

import "./formPersonal.css";

const FormPersonal = (props) => {
  const next = (e) => {
    e.preventDefault();
    // BACKEND
    props.nextStep();
  };

  let buttonHandlerColor =
    props.values["password"] === "" || props.values["name"] === "";

  return (
    <React.Fragment>
      <InputField
        type={"text"}
        label={"Nombre de Usuario"}
        onChange={props.handleChange("name")}
        defaultValue={props.values.name}
      />
      <InputField
        type={"text"}
        label={"Contraseña"}
        onChange={props.handleChange("password")}
        defaultValue={props.values.password}
      />
      <PrimaryButton
        text="Siguiente"
        bg={buttonHandlerColor ? "#8E938D" : "#8f0000"}
        color="#F0F0F0"
        onClick={next}
        disabled={buttonHandlerColor ? "false" : ""}
      />
    </React.Fragment>
  );
};

export default FormPersonal;
