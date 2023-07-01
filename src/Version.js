import React, { useState, useEffect } from "react";

//material components
import { Typography, Paper } from "@mui/material";

//components
import { ResponsiveDrawer } from "./ResponsiveDrawer";
import { ToDoList } from "./ToDoList";
export const Version = () => {
  const [version, setVersion] = useState("");
  useEffect(() => {
    fetch(`${process.env.REACT_APP_SERVER_ROOT}/api/version`)
        .then(response => response.json())
        .then(json => {setVersion(json.msg)})
  }, []);
  return (
    <Paper>
        <Typography>{version}</Typography>
    </Paper>

  )
};
