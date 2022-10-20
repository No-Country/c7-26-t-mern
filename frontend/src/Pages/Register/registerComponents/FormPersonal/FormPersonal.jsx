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
    props.values["dni"] === "" || 
    props.values["name"] === "" || 
    props.values["lastName"] === "";

  return (
    <React.Fragment>
      <InputField
        type={"text"}
        label={"Nombre"}
        onChange={props.handleChange("name")}
        defaultValue={props.values.name}
      />
      <InputField
        type={"text"}
        label={"Apellido"}
        onChange={props.handleChange("lastName")}
        defaultValue={props.values.lastName}
      />
            <InputField
        type={"text"}
        label={"DNI"}
        onChange={props.handleChange("dni")}
        defaultValue={props.values["dni"]}
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