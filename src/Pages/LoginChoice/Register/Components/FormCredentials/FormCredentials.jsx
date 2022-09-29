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


  return (
    <React.Fragment>
      <HeaderRegister onClick={props.prevState} />
      <section className="section-register__container">
        <LogoRounded />

        <p className="section-register__container-title">REGISTRATE</p>
        <p className="section-register__container-description">
          Ingresa tus datos personales.
        </p>
        <InputField
          type={"text"}
          label={"Correo electronico"}
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
          bg="#8E938D"
          color="#F0F0F0"
          to="/home"
        />
      </section>
    </React.Fragment>
  );
};

export default FormCredentials;
