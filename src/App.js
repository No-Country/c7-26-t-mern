import React from "react";
import BotNav from "./components/Nav/BotNav/BotNav";
import Card from "./components/Card/Card";
import TopNav from "./components/Nav/TopNav/TopNav";
/* import Login from "./Pages/LoginChoice/Login/Login";
import LoginChoice from "./Pages/LoginChoice/LoginChoice"; */

function App() {
  return (
    <>
      {/* <LoginChoice /> */}
      <TopNav />
      <Card />
      <BotNav />
    </>
  );
}

export default App;
