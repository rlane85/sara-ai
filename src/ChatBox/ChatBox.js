//react imports
import { useState, useEffect } from "react";
//components
import { Textfield } from "./";
//mui components
import { Typography, Paper, Container, Grid } from "@mui/material";
//styles

const ChatBox = ({
  saraReply,
  userInput,
  textMessage,
  setTextMessage,
  sendTextMessage,
}) => {
  const [aiHistory, setAiHistory] = useState({ ...saraReply });
  const [userHistory, setUserHistory] = useState({ ...userInput });

  useEffect(() => {
    addAiReply(saraReply);
    addUserReply(userInput);
  }, [saraReply, userInput]); // eslint-disable-line

  const addAiReply = (aiInput) => {
    const copy = { ...aiHistory, ...saraReply };
    setAiHistory(copy);
  };
  const addUserReply = (input) => {
    const copy = { ...userHistory, ...input };
    setUserHistory(copy);
  };

  return (
    <Container>
      <Grid container component={Paper} sx={{ height: "70vh" }}>
        {Object.keys(aiHistory).map((aiMessageKey) => {
          const aiMessage = aiHistory[aiMessageKey];
          const attachedUserMessage = userHistory[aiMessageKey];
          return (
            <Grid key={aiMessageKey+"item"} item xs={12}>
              <Typography
                align={"left"}
                key={aiMessageKey + "userMessage"}
                color="green"
              >
                {attachedUserMessage}
              </Typography>
              <Typography align={"right"} key={aiMessageKey} color="red">
                {aiMessage}
              </Typography>
            </Grid>
          );
        })}
      </Grid>
      <Textfield
        textMessage={textMessage}
        setTextMessage={setTextMessage}
        sendTextMessage={sendTextMessage}
      />
    </Container>
  );
};
export { ChatBox };
