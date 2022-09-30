import React from "react";

import Card from "../../components/Card/Card";
import TopNav from "../../components/Nav/TopNav/TopNav";
import BotNav from "../../components/Nav/BotNav/BotNav";

const Home = () => {
  return (
    <React.Fragment>
      <TopNav></TopNav>
      <Card></Card>
      <BotNav></BotNav>
    </React.Fragment>
  );
};

export default Home;
