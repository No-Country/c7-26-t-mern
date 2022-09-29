import React, { useState } from "react";

import "./register.css";

import HeaderRegister from "./Components/HeaderRegister";
import LogoRounded from "../../../Components/LogoRounded/LogoRounded";

import FormCredentials from "./Components/FormCredentials/FormCredentials";
import FormPersonal from "./Components/FormPersonal/FormPersonal";

const Register = (props) => {
  const [state, setState] = useState({
    step: 1,
    name: "",
    dni: "",
    email: "",
    password: "",
    passwordRepited: "",
  });

  const nextStep = () => {
    setState((state) => ({
      ...state,
      step: state.step + 1,
    }));
  };

  const prevState = () => {
    const { step } = state;
    setState({
      step: step - 1,
    });
  };

  const handleChange = (input) => (e) => {
    setState((state) => ({
      ...state,
      [input]: e.target.value,
    }));
  };

  return (
    <section className="section-register">
      <HeaderRegister />
      <section className="section-register__container">
        <LogoRounded />

        <p className="section-register__container-title">REGISTRATE</p>
        <p className="section-register__container-description">
          Ingresa tus datos personales.
        </p>
        {state.step === 1 && (
          <FormPersonal
            nextStep={nextStep}
            handleChange={handleChange}
          ></FormPersonal>
        )}
        {state.step === 2 && (
          <FormCredentials
            nextStep={nextStep}
            handleChange={handleChange}
          ></FormCredentials>
        )}
      </section>
    </section>
  );
};

export default Register;
