import React from "react";
import BotNav from "./components/Nav/BotNav/BotNav";
import TopNav from "./components/Nav/TopNav/TopNav";
import Login from "./Pages/LoginChoice/Login/Login";
import LoginChoice from "./Pages/LoginChoice/LoginChoice";
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
      <BrowserRouter>
      <>
        {/* <LoginChoice/> */}
        <TopNav />
        <BotNav />
      </>
      </BrowserRouter>
  );
}

export default App;
