//react imports
import { useState, useEffect } from "react";
//components

//mui components
import { Box, Divider, Typography } from "@mui/material";

const ChatBox = ({ saraReply, userInput }) => {
  const [aiHistory, setAiHistory] = useState({ ...saraReply });
  const [userHistory, setUserHistory] = useState({ ...userInput });
  // console.log(userHistory);
  useEffect(() => {
    // console.log(userInput);

    addAiReply(saraReply);
    addUserReply(userInput);
  }, [saraReply, userInput]);

  const addAiReply = (aiInput) => {
    // let copy = {...aiHistory};

    const id = Object.keys(aiInput)[0];
    const copy = { ...aiHistory, ...saraReply };
    setAiHistory(copy);
  };
  const addUserReply = (input) => {
    // console.log(saraReply);

    const id = Object.keys(input)[0];
    const copy = { ...userHistory, ...input };
    setUserHistory(copy);
    console.log(copy);
  };

  return (
    <Box>
      {Object.keys(aiHistory).map((aiMessageKey) => {
        const aiMessage = aiHistory[aiMessageKey];
        const attachedUserMessage = userHistory[aiMessageKey]
        // console.log(aiMessageKey);
        // console.log(aiHistory);
        console.log(aiMessage);
        console.log(attachedUserMessage);
        return (
          <Box>
            <Typography key={aiMessageKey} color='red'>{aiMessage}</Typography>
            <Typography key={aiMessageKey+'userMessage'} color='green'>{attachedUserMessage}</Typography>
          </Box>
        );
      })}
    </Box>
  );
};
export { ChatBox };
