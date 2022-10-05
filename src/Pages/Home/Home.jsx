import React from "react";
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
    </React.Fragment>
  );
};

export default Home;
