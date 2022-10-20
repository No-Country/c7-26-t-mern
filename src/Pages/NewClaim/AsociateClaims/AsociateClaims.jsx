import { useLocation } from "react-router-dom";
import { useState } from "react";

import ThemeCard from "../../../Components/ThemeCard/ThemeCard";
import Card from "../../../Components/Card/Card";
import InstitutionCard from "../InstitutionCard";

import PrimaryButton from "../../../Components/PrimaryButton/PrimaryButton";

import "./asociateClaims.css";

const AsociateClaims = () => {
  const [shadow, setShadow] = useState(false);

  const ScrollHandler = (e) => {
    let element = e.target;
    if (element.scrollTop !== 0) {
      setShadow(true);
    } else {
      setShadow(false);
    }
  };

  function ThemeGetter() {
    const location = useLocation();
    try {
      const { Theme, Institution } = location.state;
      console.log(location.state);
      return { Theme, Institution };
    } catch (err) {
      return "Default";
    }
  }

  let { Theme, Institution } = ThemeGetter();

  return (
    <div>
      <div
        className="reclamosAsociadosSectionSelectionTop"
        style={{
          boxShadow: shadow ? "0px -1px 18px rgba(0, 0, 0, 0.25)" : "none",
        }}
      >
        <InstitutionCard
          category={Institution.category}
          src={Institution.src}
          alt={Institution.text}
          text={Institution.text}
          className="filterIconRounded"
        />
        <ThemeCard bg={Theme.bg} title={Theme.title} id={Theme.id} />
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
              Theme: Theme,
              Institution: Institution,
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
  );
};

export default AsociateClaims;
