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
      {state.step === 1 && (
        <FormPersonal
          nextStep={nextStep}
          handleChange={handleChange}
          values={state}
        ></FormPersonal>
      )}
      {state.step === 2 && (
        <FormCredentials
          nextStep={nextStep}
          prevState={prevState}
          handleChange={handleChange}
          values={state}
        ></FormCredentials>
      )}
    </section>
  );
};

export default Register;
