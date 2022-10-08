import { React, useState } from "react";
import TextField from "@mui/material/TextField";
import List from "./Components/List"
import "./App.css";

function SearchBar() {
  const main = {
    display: "flex",
    height: "100vh",
    width: "100%",
    alignItems: "center",
    flexDirection: "column",
    rowGap: "20px",
}
  return (
    <div style={main}>
      <div className="search" style={{width: "30%"}}>
        <TextField
          id="outlined-basic"
          variant="outlined"
          fullWidth
          label="Search"
        />
      </div>
      <List />
    </div>
  );
}

export default SearchBar;