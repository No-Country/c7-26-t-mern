import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import BotNav from "./Components/Nav/BotNav/BotNav";
import TopNav from "./Components/Nav/TopNav/TopNav";
import Login from "./Pages/LoginChoice/Login/Login";
import Register from "./Pages/LoginChoice/Register/Register.jsx";
import LoginChoice from "./Pages/LoginChoice/LoginChoice";
import Home from "./Pages/Home/Home.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginChoice />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/home" element={<Home />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
