import React, { useState, useEffect }from 'react';

import { IconButton, Paper } from "@mui/material";

import SendIcon from "@mui/icons-material/Send";

export const Test = () => {

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
 
  useEffect(() => {
    const url = "https://lanedb.hopto.org/api/version/"
    fetch(url)
      .then(response => response.json())
      .then((usefulData) => {
        console.log(usefulData);
        setLoading(false);
        setData(usefulData);
      })
      .catch((e) => {
        console.error(`An error occurred: ${e}`)
      });
  }, []);



  return (
    <Paper>
      <SendIcon 
          onClick={() => {
          }} />

    </Paper>
  )
}