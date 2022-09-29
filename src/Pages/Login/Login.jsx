import React from "react";

import InputField from "../../components/InputField/InputField";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";
import LogoRounded from "../../components/LogoRounded/LogoRounded";

import HeaderLogin from "./loginComponents/HeaderLogin/HeaderLogin";
import LoginButtons from "./loginComponents/LoginButtons/loginButtons";

import "./login.css";

const Login = () => {
  return (
    <section className="sectionLogin">
      <HeaderLogin />
      <section className="sectionLoginContainer">
        <LogoRounded />

        <p className="sectionLoginContainerTitle">INICIA SESIÓN</p>
        <InputField type={"text"} label={"Nombre Completo"} />
        <InputField type={"text"} label={"DNI"} class="probando" />
        <a className="sectionLoginContainerRecoveyLink" href="/">
          ¿Restablecer Contraseña?
        </a>
        <PrimaryButton
          text="Ingresar"
          bg="#8E938D"
          color="#F0F0F0"
          to="/home"
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
