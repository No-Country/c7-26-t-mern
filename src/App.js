import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


/* import BotNav from "./components/Nav/BotNav/BotNav";
import TopNav from "./components/Nav/TopNav/TopNav"; */
import Login from "./Pages/Login/Login.jsx";

import Register from "./Pages/Register/Register.jsx";
import LoginChoice from "./Pages/LoginChoice/LoginChoice.jsx";
import Home from "./Pages/Home/Home.jsx";
import AppNotification from './components/AppNotification/AppNotification';
import Perfil from "./components/Perfil/Perfil";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginChoice />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/notifications" element={<AppNotification />}></Route>
        <Route path="/perfil" element={<Perfil />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
