import React, { useContext, useState } from "react";
import axios from "axios";
import InputField from "../../Components/InputField/InputField";
import PrimaryButton from "../../Components/PrimaryButton/PrimaryButton";
import LogoRounded from "../../Components/LogoRounded/LogoRounded";
import HeaderLogin from "./loginComponents/HeaderLogin/HeaderLogin";
import LoginButtons from "./loginComponents/LoginButtons/loginButtons";

import "./login.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Login = (props) => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (token.length > 0) {
      navigate("/home");
    }
  }, [token]);

  //fill inputs y obtain data value by onChange event
  const handleOnChangeName = (e) => {
    setName(e.target.value);
  };

  const handleOnChangePassword = (e) => {
    setPassword(e.target.value);
  };

  let buttonHandlerColor = name === "" || password === "";

  //function to botton
  const loginFunction = async () => {
    axios({
      method: "post",
      url: "http://localhost:4000/api/v1/users/login",
      data: {
        email: name,
        password: password,
      },
      headers: {
        alg: "HS256",
        typ: "JWT",
      },
    }).then(
      function logear({ data: response }) {
        console.log("Logeado correctamente");
        setToken(response.data.token);
        // window.localStorage.setItem("rol", response.data.rol);
        window.localStorage.setItem("token", response.data.token);
        window.localStorage.setItem("id", response.data.user.id);
      },
      function error(params) {
        console.error("Nombre o Contraseña incorrecta");
      }
    );
  };

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
            bg={buttonHandlerColor ? "#8E938D" : "#8f0000"}
            color="#F0F0F0"
            onClick={loginFunction}
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
