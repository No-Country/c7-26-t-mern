import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

/* import BotNav from "./components/Nav/BotNav/BotNav";
import TopNav from "./components/Nav/TopNav/TopNav"; */
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register.jsx";
import LoginChoice from "./pages/LoginChoice/LoginChoice";
import Home from "./pages/Home/Home.jsx";

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
