import { useLocation } from "react-router-dom";
import React, { useRef, useState, useEffect } from "react";

import ThemeCard from "../../../Components/ThemeCard/ThemeCard";
import Card from "../../../Components/Card/Card";
import InstitutionCard from "../InstitutionCard";

import PrimaryButton from "../../../Components/PrimaryButton/PrimaryButton";

import "./asociateClaims.css";

const AsociateClaims = () => {
  const [shadow, setShadow] = useState(false);
  const [load, setLoad] = useState(false);
  const Theme = useRef();
  const Institution = useRef();
  const location = useLocation();

  const ScrollHandler = (e) => {
    let element = e.target;
    if (element.scrollTop !== 0) {
      setShadow(true);
    } else {
      setShadow(false);
    }
  };

  useEffect(() => {
    Theme.current = location.state.Theme;
    Institution.current = location.state.Institution;
    setLoad(true);
  }, []);

  return (
    <React.Fragment>
      {load ? (
        <div>
          <div
            className="reclamosAsociadosSectionSelectionTop"
            style={{
              boxShadow: shadow ? "0px -1px 18px rgba(0, 0, 0, 0.25)" : "none",
            }}
          >
            <InstitutionCard
              link={false}
              category={Institution.current.category}
              src={Institution.current.src}
              alt={Institution.current.text}
              text={Institution.current.text}
              className="filterIconRounded"
            />
            <ThemeCard
              bg={Theme.current.bg}
              title={Theme.current.title}
              id={Theme.current.id}
            />
          </div>
          <div className="reclamosAsociadosSection">
            <div className="reclamosAsociadosSectionSelection"></div>
            <div className="reclamosAsociadosSectionSelectionBottom">
              <PrimaryButton
                to="/newClaim/claim"
                text="CREAR NUEVO"
                bg="var(--color-bg-primary)"
                color="var(--color-primary)"
                state={{
                  Title: "Nuevo Reclamo",
                  Theme: Theme.current,
                  Institution: Institution.current,
                }}
              ></PrimaryButton>
            </div>

            <div
              className="reclamosAsociadosSectionSelectionClaims"
              onScroll={ScrollHandler}
            >
              <h3 className="reclamosAsociadosSectionSelectionClaimsTitle">
                Reclamos Activos
              </h3>

              <Card
                title={"No hay agua en el barrio"}
                subtitle={"AGUA"}
                description={
                  "La ciudad está sin agua, vecinos apoyemos esta moción para que el intendente haga algo."
                }
              ></Card>

              <Card
                title={"No hay agua en el barrio"}
                subtitle={"AGUA"}
                description={
                  "La ciudad está sin agua, vecinos apoyemos esta moción para que el intendente haga algo."
                }
              ></Card>

              <Card
                title={"No hay agua en el barrio"}
                subtitle={"AGUA"}
                description={
                  "La ciudad está sin agua, vecinos apoyemos esta moción para que el intendente haga algo."
                }
              ></Card>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </React.Fragment>
  );
};

export default AsociateClaims;
