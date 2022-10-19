import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { BsFilterSquareFill } from "react-icons/bs";
import axios from "axios";

import "./searchbar.css";
import { useState } from "react";

function SearchBar() {
  const [show, setShow] = useState(false);

  function setFilter(e) {
    // console.log(e.target.attributes.option.value);
    localStorage.setItem("filterSelected", e.target.attributes.option.value);
  }

  return (
    <div className="searchBarContainer">
      <Paper
        component="form"
        className="homeSearch"
        sx={{
          p: "2px 6px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          ml: 0,
          mt: 0,
          mb: 0,
        }}
      >
        <IconButton sx={{ p: "10px" }} aria-label="menu">
          <SearchIcon />
        </IconButton>
        <InputBase
          sx={{ ml: 1, flex: 1, fontSize: 13 }}
          placeholder="Busca un reclamo"
          inputProps={{ "aria-label": "Busca un reclamo" }}
        />
        <IconButton
          type="button"
          sx={{ p: "10px" }}
          aria-label="search"
          onClick={() => setShow(!show)}
        >
          <BsFilterSquareFill />
        </IconButton>
      </Paper>
      <div className={`${show ? "filterOptionsDivOn" : "filterOptionsDivOff"}`}>
        <ul className="filterOptions">
          <li option="categories" className="filterOption" onClick={setFilter}>
            Categorias
          </li>
          <li
            option="institutionns"
            className="filterOption"
            onClick={setFilter}
          >
            Instituciones
          </li>
          <li option="id" className="filterOption" onClick={setFilter}>
            Numero de Reclamo
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SearchBar;
