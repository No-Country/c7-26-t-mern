import React, { useState, useEffect } from "react";

import Logo from "../../components/Logo/Logo";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";

import "./loginChoice.css";

const LoginChoice = () => {
  const [loading, setLoading] = useState(false);
  const [logoR, setLogoR] = useState(false);
  const [logoDiff, setLogoDiff] = useState(false);
  const [logoContainer, setContainer] = useState(false);


  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLogoR(true)
      // this.logoR.classList.add("active");

      setTimeout(() => {
        setLogoDiff(true)
        // this.logoDiff.classList.add("active");
      }, 500);

      setTimeout(() => {
        setContainer(true)
        // this.logoContainer.classList.add("movement");
      }, 600);

      setTimeout(() => {
        setLogoR(false)
        
        // this.logoR.classList.remove("active");
      }, 1500);
    }, 500);

    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <section className="sectionLoginChoice">
      {loading ? (
        <div className="intro">
          <div className="logo-header">
            <div className = {`logoContainer ${logoContainer ? "movement" : ""}`}>
              <div className={`logoR ${logoR ? "active" : ""}`}>
                <img className="logoIntro" src={require("../../assets/img/r.svg").default} alt="" />
                <img
                  className="logoIntro"
                  src={require("../../assets/img/circulo.svg").default}
                  alt=""
                />

                <img
                  className = {`logoDiff ${logoDiff ? "active" : ""}`}
                  src={require("../../assets/img/rCortada.svg").default}
                  alt=""
                
                />
              </div>
            </div>
          </div>
        </div>
      ) : (
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
      )}
    </section>
  );
};

export default LoginChoice;
