import React from "react";

import InputField from "../../../../Components/InputField/InputField";
import PrimaryButton from "../../../../Components/PrimaryButton/PrimaryButton";
import axios from "axios";
import "./formCredentials.css";

const FormCredentials = (props) => {
  const next = (e) => {
    e.preventDefault();
      axios.post('http://localhost:8000/signup', {
        DNI: props.values.dni,
        claimmerName: props.values.name,
        claimmerLastname: props.values.lastName,
        email: "pedro@gmail.com",
        password: props.values.password
      })

      props.nextStep();
    
  };

  console.log(props.values)

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
        onClick={next}
      />
    </React.Fragment>
  );
};

export default FormCredentials;