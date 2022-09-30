import React from "react";

import Logo from "../../components/Logo/Logo";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";

import "./loginChoice.css";

const LoginChoice = () => {
  return (
    <section className="section-loginChoice">
      <div className="section-loginChoice__container">
        <Logo/>
        <p className="section-loginChoice__container-description">
          Haz valer tus reclamos y apoya los de tu comunidad
        </p>

        <div className="section-loginChoice__container-buttons">
          <PrimaryButton
            text="REGISTRATE"
            bg="#8F0000"
            color="#F0F0F0"
            to="/register"
          />
          <PrimaryButton
            text="INICIA SESION"
            bg="#FFE9AC"
            color="#8F0000"
            to="/login"
          />
        </div>

        <div className="section-loginChoice__container-terms">
          <p className="section-loginChoice__container-terms-text">
            Al registrarte, o iniciar sesión, aceptás los{" "}
            <a
              href="/"
              className="section-loginChoice__container-terms-text-link"
            >
              Términos de Servicio{" "}
            </a>
            y la{" "}
            <a
              href="/"
              className="section-loginChoice__container-terms-text-link"
            >
              Política de Privacidad
            </a>{" "}
            de Reclami.
          </p>
        </div>
      </div>
    </section>
  );
};

export default LoginChoice;
