import React from "react";

import Card from "../../Components/Card/Card";
import TopNav from "../../Components/Nav/BotNav/BotNav";
import BotNav from "../../Components/Nav/TopNav/TopNav";

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
