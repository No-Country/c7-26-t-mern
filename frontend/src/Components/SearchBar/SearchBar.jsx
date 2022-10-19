import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "@mui/icons-material/Mic";
import axios from "axios";

import "./searchbar.css";

function SearchBar({ handleSearch }) {
  return (
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
        onChange={handleSearch}
      />
      <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
        <MicIcon />
      </IconButton>
    </Paper>
  );
}

export default SearchBar;
