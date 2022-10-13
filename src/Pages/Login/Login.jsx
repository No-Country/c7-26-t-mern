import React from "react";
import { useState } from "react";

import InputField from "../../Components/InputField/InputField";
import PrimaryButton from "../../Components/PrimaryButton/PrimaryButton";
import LogoRounded from "../../Components/LogoRounded/LogoRounded";

import HeaderLogin from "./loginComponents/HeaderLogin/HeaderLogin";
import LoginButtons from "./loginComponents/LoginButtons/loginButtons";

import "./login.css";

const Login = () => {
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    setState((state) => ({
      ...state,
      [name]: value,
    }));
  };

  let buttonHandlerColor = state["email"] === "" || state["password"] === "";

  return (
    <section className="sectionLogin">
      <HeaderLogin />
      <section className="sectionLoginContainer">
        <LogoRounded />

        <p className="sectionLoginContainerTitle">INICIA SESIÓN</p>
        
        <InputField
          type={"email"}
          label={"Correo Electronico"}
          value={state["email"]}
          onChange={handleChange}
          name="email"
          disabled={""}
        />
        <InputField
          type={"password"}
          label={"Contraseña"}
          class="inputMargin"
          value={state["password"]}
          onChange={handleChange}
          name="password"
        />
        <a className="sectionLoginContainerRecoveyLink" href="/">
          ¿Restablecer Contraseña?
        </a>
        <PrimaryButton
          text="Ingresar"
          bg={buttonHandlerColor ? "#8E938D" : "#8f0000"}
          color="#F0F0F0"
          to="/home"
          disabled={buttonHandlerColor ? "false" : ""}
        />

        <p className="sectionLoginContainerHelperText">
          <span> O continuar con</span>
        </p>

        <LoginButtons />
      </section>
    </section>
  );
};

export default Login;
