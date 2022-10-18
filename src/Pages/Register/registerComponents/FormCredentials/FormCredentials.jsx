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

  const emailValidation = () => {
    let emailValue = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(props.values["email"])
    if(emailValue || props.values["email"] === ""){
      return true
    }
    return false
  }

  const passwordValidation = () => {
    let passwordValue = /^(?=.*[A-Z].*[a-z]).{8,16}$/.test(props.values["password"])
    if (passwordValue || props.values["password"] === ""){
      return true
    }
    return false
  }

  const samePassword = () => {
    const password = props.values["password"]
    const repeatPassword = props.values["passwordRepited"]
    if (repeatPassword === password || repeatPassword === ""){
      return true
    }
    return false
  }

  const buttonDisable = () => {
    let email = emailValidation()
    let password = passwordValidation()
    let repeatPassword = samePassword()

    if (email && password && repeatPassword && !buttonHandlerColor){
      return true
    }
    return false
  }

  console.log(buttonDisable())
  console.log(buttonHandlerColor)


  return (
    <React.Fragment>
      <InputField
        eventBlur={emailValidation}
        type={"text"}
        label={"Correo Electronico"}
        onChange={props.handleChange("email")}
        defaultValue={props.values.email}
      />
      {!emailValidation() && <span className="spanForm">*Por favor, introduzca un email valido</span>}

      <InputField
        eventBlur={passwordValidation}
        type={"password"}
        label={"Contraseña"}
        onChange={props.handleChange("password")}
        defaultValue={props.values.password}
      />
      {!passwordValidation() && <span className="spanForm">*La contraseña debe contener al menos:
         Una letra mayuscula, Una letra minuscula y tener una longitud de 8 a 16 caracteres
         </span>}

      <InputField
        type={"password"}
        label={"Repita la contraseña"}
        onChange={props.handleChange("passwordRepited")}
        defaultValue={props.values.passwordRepited}
      />
      {!samePassword() && <span className="spanForm">*No coincide con la contraseña</span>}

      <PrimaryButton
        text="Siguiente"
        bg={!buttonDisable() ? "#8E938D" : "#8f0000"}
        color="#F0F0F0"
        to="/home"
        disabled={!buttonDisable() ? "false" : ""}
      />
    </React.Fragment>
  );
};

export default FormCredentials;