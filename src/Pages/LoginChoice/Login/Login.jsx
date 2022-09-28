import React from "react";

import "./login.css";
import InputField from "../../../Components/InputField/InputField";
import PrimaryButton from "../../../Components/PrimaryButton/PrimaryButton";

const Login = () => {
  return (
    <section className="section-login">
      <InputField type={"text"} label={"Nombre Completo"}/>
      <InputField type={"text"} label={"DNI"}/>
      <PrimaryButton />
    </section>
  );
};

export default Login;
