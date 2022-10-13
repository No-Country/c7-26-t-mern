import React from "react";
import Card from "../../Components/Card/Card";
import TopNav from "../../Components/Nav/TopNav/TopNav";
import SearchBar from "../../Components/SearchBar/SearchBar";
import BotNav from "../../Components/Nav/BotNav/BotNav";

const Home = () => {
  return (
    <React.Fragment>
      <TopNav text='Hola Moria!'></TopNav>
      <BotNav></BotNav>
      <SearchBar placeholder="Busca un reclamo" />
      <Card></Card>
      {/* <ButtonClaim></ButtonClaim> */}
    </React.Fragment>
  );
};

export default Home;
