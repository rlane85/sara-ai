import React from "react";
import { InputBase, IconButton, Paper, Divider } from "@mui/material";

import SendIcon from "@mui/icons-material/Send";

const Textfield = ({ textMessage, setTextMessage, sendTextMessage }) => {
  return (
    <Paper
      component="form"
      sx={{ p: "2px 4px", display: "flex", alignItems: "center", }}
    >
      <InputBase
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            sendTextMessage(textMessage);
            setTextMessage("");
            e.preventDefault();
          }
        }}
        sx={{ ml: 1, flex: 1 }}
        placeholder="Type to Sara"
        inputProps={{ "aria-label": "type to sara" }}
        onChange={(e) => {
          setTextMessage(e.target.value);
        }}
        value={textMessage}
      />

      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      <IconButton
        color="primary"
        sx={{ p: "10px" }}
        aria-label="send message to sara"
        onClick={() => {
          sendTextMessage(textMessage);
          console.log(textMessage)
        }}
      >
        <SendIcon />
      </IconButton>
    </Paper>
  );
};
export { Textfield };
