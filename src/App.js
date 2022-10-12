import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register.jsx";
import LoginChoice from "./Pages/LoginChoice/LoginChoice";
import Home from "./Pages/Home/Home.jsx";
import AppNotification from "./Pages/AppNotification/AppNotification";
import Perfil from "./Pages/Perfil/Perfil";

function App() {
  const [introRun, setIntroRun] = useState(true);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginChoice introRun={introRun} setIntroRun={setIntroRun} />}></Route>
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
