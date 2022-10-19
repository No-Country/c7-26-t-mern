import React from "react";
import Card from "../../Components/Card/Card";
import TopNav from "../../Components/Nav/TopNav/TopNav";
import BotNav from "../../Components/Nav/BotNav/BotNav";
import SearchBar from "../../Components/SearchBar/SearchBar";
import "./home.css";

const Home = () => {
  return (
    <React.Fragment>
      <TopNav className="topNav"></TopNav>
      <BotNav></BotNav>
      <section className="sectionHome">
        <SearchBar placeholder="Busca un reclamo" />

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
