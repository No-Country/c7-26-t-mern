import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register.jsx";
import LoginChoice from "./Pages/LoginChoice/LoginChoice";
import Home from "./Pages/Home/Home.jsx";
import AppNotification from "./Pages/AppNotification/AppNotification";
import Profile from "./Pages/Profile/Profile";
import ClaimDetail from "./Pages/ClaimDetail/ClaimDetail";
import List from "./Components/List/List";
import NewClaim from "./Pages/NewClaim/NewClaim";
import FilterInstitution from "./Pages/NewClaim/Institution/FilterClaim";
import FilterSingleCategory from "./Pages/NewClaim/Category/FilterCategory";
import NewClaimIndex from "./Pages/NewClaim/NewClaimIndex";
import MyClaims from "./Pages/MyClaims/MyClaims";
import AsociateClaims from "./Pages/NewClaim/AsociateClaims/AsociateClaims";

function App() {
  const [introRun, setIntroRun] = useState(true);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <LoginChoice introRun={introRun} setIntroRun={setIntroRun} />
          }
        ></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/List" element={<List />}></Route>
        <Route path="/notifications" element={<AppNotification />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        {/* <Route path="/newclaim" element={<NewClaim />}></Route> */}
        <Route path="newClaim" element={<NewClaimIndex />}>
          <Route path="institution" element={<FilterInstitution />}></Route>
          <Route path="asociateClaims" element={<AsociateClaims />}></Route>
          <Route path="category" element={<FilterSingleCategory />}></Route>
          <Route path="claim" element={<NewClaim />}></Route>
        </Route>
        <Route path="claimdetail" element={<ClaimDetail />}></Route>
        <Route path="myClaims" element={<MyClaims />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
