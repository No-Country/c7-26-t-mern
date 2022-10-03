import React from "react";
import ButtonClaim from "../../components/ButtonClaim/ButtonClaim";
import Card from "../../components/Card/Card";
import TopNav from "../../components/Nav/BotNav/BotNav";
import BotNav from "../../components/Nav/TopNav/TopNav";

const Home = () => {
  return (
    <React.Fragment>
      <TopNav></TopNav>
      <BotNav></BotNav>
      <Card></Card>
      <Card></Card>
      <ButtonClaim></ButtonClaim>
    </React.Fragment>
  );
};

export default Home;
