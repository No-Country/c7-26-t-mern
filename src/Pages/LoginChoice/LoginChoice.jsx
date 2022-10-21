import React, { useState, useEffect } from "react";

import Logo from "../../Components/Logo/Logo";
import PrimaryButton from "../../Components/PrimaryButton/PrimaryButton";

import "./loginChoice.css";
import LoginInputDesktop from "./LoginInputDesktop";

const LoginChoice = (props) => {
  const [loading, setLoading] = useState(false);
  const [logoR, setLogoR] = useState(false);
  const [logoDiff, setLogoDiff] = useState(false);
  const [logoContainer, setContainer] = useState(false);
  const [containerOut, setContainerOut] = useState(false);

  const [width, setWidth] = useState(window.innerWidth);

  const changeWidth = () => {
    setWidth(window.innerWidth);
  };

  const setIntroRun = () => {
    props.setIntroRun(false);
  };

  useEffect(() => {
    setLoading(false);

    setTimeout(() => {
      setLogoR(true);
      // this.logoR.classList.add("active");

      setTimeout(() => {
        setLogoDiff(true);
        // this.logoDiff.classList.add("active");
      }, 500);

      setTimeout(() => {
        setContainer(true);
        // this.logoContainer.classList.add("movement");
      }, 600);

      setTimeout(() => {
        setContainerOut(true);

        // this.logoR.classList.remove("active");
      }, 1200);
    }, 500);

    setTimeout(() => {
      setLoading(true);
      setIntroRun();
    }, 2500);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", changeWidth);

    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  return (
    <section className="sectionLoginChoice">
      {props.introRun ? (
        <div
          className={`intro ${loading ? "displayIntro" : ""} ${
            containerOut ? "disapper" : ""
          }`}
        >
          <div className="logo-header">
            <div className={`logoContainer ${logoContainer ? "movement" : ""}`}>
              <div className={`logoR ${logoR ? "active" : ""}`}>
                <img
                  className="logoIntro"
                  src={require("../../Assets/img/r.svg").default}
                  alt=""
                />
                <img
                  className="logoIntro"
                  src={require("../../Assets/img/circulo.svg").default}
                  alt=""
                />

                <img
                  className={`logoDiff ${logoDiff ? "active" : ""}`}
                  src={require("../../Assets/img/rCortada.svg").default}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}

      <div className="sectionLoginChoiceContainer">
        <div className="sectionLoginChoiceContainerFunc">
          <div className="sectionLoginChoiceContainerInfo">
            <Logo />
            <p className="sectionLoginChoiceContainerDescription">
              Haz valer tus reclamos y apoya los de tu comunidad
            </p>
          </div>
          {width >= 700 ? (
            <LoginInputDesktop />
          ) : (
            <div className="sectionLoginChoiceContainerButtons">
              <PrimaryButton
                text="INICIA SESION"
                bg="#FFE9AC"
                color="#8F0000"
                to="/login"
              />

              <PrimaryButton
                text="REGISTRATE"
                bg="#8F0000"
                color="#F0F0F0"
                to="/register"
              />
            </div>
          )}
        </div>
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
    </section>
  );
};

export default LoginChoice;
