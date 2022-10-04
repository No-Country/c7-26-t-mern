import React from "react";
import ButtonClaim from "../../components/ButtonClaim/ButtonClaim";
import Card from "../../components/Card/Card";
import TopNav from "../../components/Nav/BotNav/BotNav";
import BotNav from "../../components/Nav/TopNav/TopNav";
import SearchBar from "../../components/SearchBar/SearchBar";

const Home = () => {
  return (
    <React.Fragment>
      <TopNav></TopNav>
      <BotNav></BotNav>
      <SearchBar placeholder="Busca un reclamo" />
      <Card></Card>
      <Card></Card>
      <ButtonClaim></ButtonClaim>
    </React.Fragment>
  );
};

export default Home;
