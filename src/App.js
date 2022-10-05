import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register.jsx";
import LoginChoice from "./Pages/LoginChoice/LoginChoice";
import Home from "./Pages/Home/Home.jsx";
import Themelist from "./components/ThemeList/ThemeList";
import AppNotification from "./components/AppNotification/AppNotification";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginChoice />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/notifications" element={<AppNotification />}></Route>
        <Route path="/themelist" element={<Themelist />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
