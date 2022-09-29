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

  return (
    <React.Fragment>
      <HeaderRegister to="/" />
      <section className="section-register__container">
        <LogoRounded />

        <p className="section-register__container-title">REGISTRATE</p>
        <p className="section-register__container-description">
          Ingresa tus datos personales.
        </p>
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
          bg="#8E938D"
          color="#F0F0F0"
          onClick={next}
        />
      </section>
    </React.Fragment>
  );
};

export default FormPersonal;
