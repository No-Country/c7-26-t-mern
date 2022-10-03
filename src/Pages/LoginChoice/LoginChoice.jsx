import React from "react";

import Logo from "../../components/Logo/Logo";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";

import "./LoginChoice.css";

const LoginChoice = () => {
  return (
    <section className="sectionLoginChoice">
      <div className="sectionLoginChoiceContainer">
        <Logo />
        <p className="sectionLoginChoiceContainerDescription">
          Haz valer tus reclamos y apoya los de tu comunidad
        </p>

        <div className="sectionLoginChoiceContainerButtons">
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

        <div className="sectionLoginChoiceContainerTerms">
          <p className="sectionLoginChoiceContainerTerms-text">
            Al registrarte, o iniciar sesión, aceptás los{" "}
            <a href="/" className="sectionLoginChoiceContainerTermsTextLink">
              Términos de Servicio{" "}
            </a>
            y la{" "}
            <a href="/" className="sectionLoginChoiceContainerTermsTextLink">
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
