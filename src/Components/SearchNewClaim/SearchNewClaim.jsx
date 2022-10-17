import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import axios from "axios";

function SearchNewClaim() {
  const [handleOnInput, setHandleOnInput] = useState("");

  const handleOnSearch = (e) => {
    setHandleOnInput(e.target.value);
    console.log(e.target.value);
  };

  return (
    <Paper
      component="form"
      sx={{
        p: "2px 6px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: 255,
        ml: 1.6,
        mt: 2,
        mb: 1.5,
      }}
    >
      <IconButton sx={{ p: "10px" }} aria-label="menu">
        <SearchIcon />
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1, fontSize: 13 }}
        placeholder="Busca una categoria"
        inputProps={{ "aria-label": "Busca una categoria" }}
        onChange={handleOnSearch}
      />
    </Paper>
  );
}

export default SearchNewClaim;
