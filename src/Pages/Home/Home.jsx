import React from "react";
import Card from "../../Components/Card/Card";
import TopNav from "../../Components/Nav/BotNav/BotNav";
import BotNav from "../../Components/Nav/TopNav/TopNav";
import SearchBar from "../../Components/SearchBar/SearchBar";

const Home = () => {
  return (
    <React.Fragment>
      <TopNav></TopNav>
      <BotNav></BotNav>
      <SearchBar placeholder="Busca un reclamo" />
      <Card title={"Titulo del reclamo"} subtitle={"subtitulo"}></Card>
      {/* <ButtonClaim></ButtonClaim> */}
    </React.Fragment>
  );
};

export default Home;
