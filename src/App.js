import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register.jsx";
import LoginChoice from "./Pages/LoginChoice/LoginChoice";
import Home from "./Pages/Home/Home.jsx";
import AppNotification from "./Pages/AppNotification/AppNotification";
import Profile from "./Pages/Profile/Profile";
// import ClaimDetail from "./Pages/ClaimDetail/ClaimDetail";
import List from "./Components/List/List";
import { NewClaim } from "./Pages/NewClaim/NewClaim";
import FilterClaim from "./Pages/NewClaim/FilterClaim";
import FilterSingleCategory from "./Pages/NewClaim/FilterSingleCategory";
import NewClaimIndex from "./Pages/NewClaim/NewClaimIndex";

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
        <Route path="/list" element={<List />}></Route>
        <Route path="/notifications" element={<AppNotification />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        {/* <Route path="/newclaim" element={<NewClaim />}></Route> */}
        <Route path="newClaim" element={<NewClaimIndex />}>
          <Route path="institution" element={<FilterClaim />}></Route>
          <Route path="category" element={<FilterSingleCategory />}></Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
