import React from "react";

import "./login.css";
import InputField from "../../../Components/InputField/InputField";
import PrimaryButton from "../../../Components/PrimaryButton/PrimaryButton";
import HeaderLogin from "./Components/HeaderLogin";
import LogoRounded from "../../../components/LogoRounded/LogoRounded";
import LoginButtons from "./Components/loginButtons";

const Login = () => {
  return (
    <section className="section-login">
      <HeaderLogin />
      <section className="section-login__container">
        <LogoRounded />

        <p className="section-login__container-title">INICIA SESIÓN</p>
        <InputField type={"text"} label={"Nombre Completo"} />
        <InputField type={"text"} label={"DNI"} class="probando"/>
        <a className="section-login__container-recovery-link" href="/">¿Restablecer Contraseña?</a>
        <PrimaryButton text="Ingresar" bg="#8E938D" color="#F0F0F0" to="/home"/>
      

        <p className="section-login__container-helper-text">
          <span> O continuar con</span>
        </p>
        
        <LoginButtons />
      </section>
    </section>
  );
};

export default Login;
