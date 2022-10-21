import React from "react";
import {ImArrowUp} from "react-icons/im"

import Card from "../../Components/Card/Card";
import TopNav from "../../Components/Nav/TopNav/TopNav";
import BotNav from "../../Components/Nav/BotNav/BotNav";
import SearchBar from "../../Components/SearchBar/SearchBar";
import PrimaryButton from "../../Components/PrimaryButton/PrimaryButton";

import "./home.css";


const Home = () => {
  return (
    <React.Fragment>
      <TopNav className="topNav"></TopNav>
      <BotNav></BotNav>
      <section className="sectionHome">
        <SearchBar placeholder="Busca un reclamo" />

        <div className="sectionHomeButtonsDesktop">
          <PrimaryButton
            color="var(--color-primary)"
            bg="var(--color-bg-primary)"
            text="NUEVOS"
          ></PrimaryButton>
          <PrimaryButton
            color="var(--color-primary)"
            bg="var(--color-bg-primary)"
            text="MÁS VOTADOS"
          ></PrimaryButton>
          <PrimaryButton
            color="var(--color-primary)"
            bg="var(--color-bg-primary)"
            text="RESUELTOS"
          ></PrimaryButton>
        </div>

        <div className="sectionHomeTitleDesktop">
          <h3>¡Mirá los reclamos que avanzan!</h3>
          <p>Votalos asi se resuelven más rápido</p>
          <span><ImArrowUp fill="var(--color-bg-primary)" size={24} /></span>
        </div>

        <div className="sectionHomeContainerCards">
          <Card
            title={"No hay agua en el barrio"}
            subtitle={"AGUA"}
            description={
              "La ciudad está sin agua, vecinos apoyemos esta moción para que el intendente haga algo."
            }
          ></Card>
          <Card
            title={"Titulo del reclamo"}
            subtitle={"subtitulo"}
            description={"Lorem ipsum dolor sit amet."}
          ></Card>
          <Card
            title={"Titulo del reclamo"}
            subtitle={"subtitulo"}
            description={"Lorem ipsum dolor sit amet."}
          ></Card>
          <Card
            title={"Titulo del reclamo"}
            subtitle={"subtitulo"}
            description={"Lorem ipsum dolor sit amet."}
          ></Card>
          <Card
            title={"Titulo del reclamo"}
            subtitle={"subtitulo"}
            description={"Lorem ipsum dolor sit amet."}
          ></Card>
          <Card
            title={"Titulo del reclamo"}
            subtitle={"subtitulo"}
            description={"Lorem ipsum dolor sit amet."}
          ></Card>
        </div>
      </section>

      {/* <ButtonClaim></ButtonClaim> */}
    </React.Fragment>
  );
};

export default Home;
