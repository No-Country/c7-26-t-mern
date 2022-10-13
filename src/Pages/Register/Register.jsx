import React, { useState } from "react";

import HeaderRegister from "./registerComponents/HeaderRegister/HeaderRegister";
import LogoRounded from "../../Components/LogoRounded/LogoRounded";

import FormCredentials from "./registerComponents/FormCredentials/FormCredentials";
import FormPersonal from "./registerComponents/FormPersonal/FormPersonal";

import "./register.css";

const Register = (props) => {
  const [state, setState] = useState({
    step: 0,
    name: "",
    lastName: "",
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
    <section className="sectionRegister">
      <HeaderRegister
        to={state.step === 0 ? "/" : null}
        onClick={state.step === 1 ? prevState : ""}
      />
      <section className="sectionRegisterContainer">
        <LogoRounded />

        <p className="sectionRegisterContainerTitle">REGISTRATE</p>
        <p className="sectionRegisterContainerDescription">
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
