<<<<<<< HEAD
import React from "react";
import { useState } from "react";

=======
import React, { useContext, useState } from "react";
import axios from "axios";
>>>>>>> 891f3df73ea81919d134e1c31a81a90ee4612476
import InputField from "../../components/InputField/InputField";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";
import LogoRounded from "../../components/LogoRounded/LogoRounded";
import HeaderLogin from "./loginComponents/HeaderLogin/HeaderLogin";
import LoginButtons from "./loginComponents/LoginButtons/loginButtons";

import "./login.css";

const Login = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  //fill inputs y obtain data value by onChange event
  const handleOnChangeName = (e) => {
    setName(e.target.value);
  };

  const handleOnChangePassword = (e) => {
    setPassword(e.target.value);
  };

  //function to botton
  const loginFunction = async () => {
    axios({
      method: "post",
      url: "http://localhost:3000/login",
      data: {
        claimmerName: name,
        password: password,
      },
    }).then(
      function logear(response) {
        console.log("Logeado correctamente");
        window.localStorage.setItem("rol", response.data.rol);
        window.localStorage.setItem("token", response.data.token);
        window.localStorage.setItem("id", response.data.idClaimmer);
        const idLogged = window.localStorage.getItem("id");
        window.localStorage.setItem("path", "/home");
      },
      function error(params) {
        console.error("Nombre o Contraseña incorrecta");
        window.localStorage.setItem("path", "/login");
      }
    );
  };

  // NEED FIX THE PROBLEM ABOUT GETING LOCALSTORAGE PATH VALUE DINAMICALLY
  // function getPathing() {
  //   window.localStorage.getItem("path");
  // }

  return (
    <section className="sectionLogin">
      <HeaderLogin />
      <section className="sectionLoginContainer">
        <LogoRounded />
        <form className="loginForm" action="">
          <p className="sectionLoginContainerTitle">INICIA SESIÓN</p>
          <InputField
            className="claimmerName"
            label="Usuario"
            name="name"
            onChange={handleOnChangeName}
          />
          <InputField
            className="claimmerPassword"
            label="Contraseña"
            password="password"
            value={password}
            onChange={handleOnChangePassword}
          />
          <a className="sectionLoginContainerRecoveyLink" href="/">
            ¿Restablecer Contraseña?
          </a>
          <PrimaryButton
            text="Ingresar"
            bg="#8E938D"
            color="#F0F0F0"
            onClick={loginFunction}
            to={"/home"}
          />{" "}
        </form>
        <p className="sectionLoginContainerHelperText">
          <span> O continuar con</span>
        </p>

        <LoginButtons />
      </section>
    </section>
  );
};

export default Login;
