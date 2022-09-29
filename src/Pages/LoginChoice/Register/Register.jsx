import React, { useState } from "react";

import "./register.css";

import { redirect } from "react-router-dom";

import HeaderRegister from "./Components/HeaderRegister";
import LogoRounded from "../../../Components/LogoRounded/LogoRounded";

import FormCredentials from "./Components/FormCredentials/FormCredentials";
import FormPersonal from "./Components/FormPersonal/FormPersonal";
import LoginChoice from "../LoginChoice";

const Register = (props) => {
  const [state, setState] = useState({
    step: 0,
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
      ...state,
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
        <HeaderRegister to={state.step === 0 ? "/" : null} onClick={state.step === 1 ? prevState : ""}/>
        <section className="section-register__container">
          <LogoRounded />

          <p className="section-register__container-title">REGISTRATE</p>
          <p className="section-register__container-description">
            Ingresa tus datos personales.
          </p>
          {state.step === 0 && (
            <FormPersonal
              nextStep={nextStep}
              handleChange={handleChange}
              values={state}
            ></FormPersonal>
          )}
          {state.step === 1 && (
            <FormCredentials
              nextStep={nextStep}
              prevState={prevState}
              handleChange={handleChange}
              values={state}
            ></FormCredentials>
          )}
        </section>
    </section>
  );
};

export default Register;
