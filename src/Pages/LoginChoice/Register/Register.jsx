import React from "react";

import "./register.css";
import InputField from "../../../Components/InputField/InputField";
import PrimaryButton from "../../../Components/PrimaryButton/PrimaryButton";
import HeaderRegister from "./Components/HeaderRegister";
import LogoRounded from "../../../Components/LogoRounded/LogoRounded";


const Register = () => {
  return (
    <section className="section-register">
      <HeaderRegister />
      <section className="section-register__container">
        <LogoRounded />

        <p className="section-register__container-title">REGISTRATE</p>
        <p className="section-register__container-description">
          Ingresa tus datos personales.
        </p>
        <InputField type={"text"} label={"Nombre Completo"} />
        <InputField type={"text"} label={"DNI"} />
        <PrimaryButton text="Siguiente" bg="#8E938D" color="#F0F0F0"/>


      </section>
    </section>
  );
};

export default Register;
