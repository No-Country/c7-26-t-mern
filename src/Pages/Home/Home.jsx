import React from "react";
import Card from "../../Components/Card/Card";
import TopNav from "../../Components/Nav/BotNav/BotNav";
import BotNav from "../../Components/Nav/TopNav/TopNav";
import SearchBar from "../../Components/SearchBar/SearchBar";
import "./home.css";

const Home = () => {
  return (
    <React.Fragment>
      <TopNav></TopNav>
      <BotNav></BotNav>
      <section className="sectionHome">
        <SearchBar placeholder="Busca un reclamo" />

        <div className="sectionHomeContainerCards">
          <Card title={"Titulo del reclamo"} subtitle={"subtitulo"}></Card>
          <Card title={"Titulo del reclamo"} subtitle={"subtitulo"}></Card>
          <Card title={"Titulo del reclamo"} subtitle={"subtitulo"}></Card>
          <Card title={"Titulo del reclamo"} subtitle={"subtitulo"}></Card>
          <Card title={"Titulo del reclamo"} subtitle={"subtitulo"}></Card>
          <Card title={"Titulo del reclamo"} subtitle={"subtitulo"}></Card>
        </div>
      </section>

      {/* <ButtonClaim></ButtonClaim> */}
    </React.Fragment>
  );
};

export default Home;
