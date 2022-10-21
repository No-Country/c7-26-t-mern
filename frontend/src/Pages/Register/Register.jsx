import React, { useState, useEffect } from "react";

import HeaderRegister from "./registerComponents/HeaderRegister/HeaderRegister";
import LogoRounded from "../../Components/LogoRounded/LogoRounded";

import FormCredentials from "./registerComponents/FormCredentials/FormCredentials";
import FormPersonal from "./registerComponents/FormPersonal/FormPersonal";

import "./register.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [claimmerDni, setClaimmerDni] = useState("");
  const [state, setState] = useState({
    step: 0,
    name: "",
    lastName: "",
    dni: "",
    email: "",
    password: "",
    passwordRepited: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    if (claimmerDni.length > 0) {
      navigate("/login");
    }
  }, [claimmerDni]);

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

  const registerFunction = async (e) => {
    e.preventDefault();
    await axios({
      method: "post",
      url: "http://localhost:4000/api/v1/claimmers",
      data: {
        name: state.name,
        email: state.email,
        password: state.password,
        DNI: state.dni,
        lastName: state.lastName,
      },
      headers: {
        alg: "HS256",
        typ: "JWT",
      },
    }).then(
      ({ data: response }) => {
        console.log(response);
        setClaimmerDni(response.data.DNI);
        console.log("Reclamante registrado correctamente");
        window.localStorage.setItem("claimmer", response.data.DNI);
      },
      function error(params) {
        console.error("Nombre o Contraseña incorrecta");
        console.log(params);
      }
    );
  };

  return (
    <section className="sectionRegister">
      <HeaderRegister
        to={state.step === 0 ? "/" : null}
        // onClick={state.step === 1 ? prevState : ""}
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
            onClick={registerFunction}
          ></FormCredentials>
        )}
      </section>
    </section>
  );
};

export default Register;
