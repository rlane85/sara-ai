//react imports
import { useEffect, useState, useRef } from "react";

//react-helmet

import { SEO } from "./icons/SEO"

//styles
import "./App.css";
import withSplashScreen from "./withSplashScreen";
import CssBaseline from "@mui/material/CssBaseline";

//components
import { ChatBox } from "./ChatBox";
import { ToDoList } from "./ToDoList";

import { ResponsiveDrawer } from "./ResponsiveDrawer";
import alanBtn from "@alan-ai/alan-sdk-web";

function App() {
  const alanBtnRef = useRef({}).current;
  const [aiAddedTask, setAiAddedTask] = useState("");
  const [parsed, setParsed] = useState({
    welcomeMsg: "This line represents a user message sent to Sara",
  });
  const [saraReply, setSaraReply] = useState({
    welcomeMsg: "I will eventually store and display your chat history here. This line reprensents one of Sara's replies",
  });
  const [textMessage, setTextMessage] = useState("");
  const sendTextMessage = () => {
    alanBtnRef.btnInstance.sendText(textMessage);
    setTextMessage("")
  }

  useEffect(() => {
    alanBtnRef.btnInstance = alanBtn({
      key: process.env.REACT_APP_ALANAI_KEY,
      showOverlayOnMicPermissionPrompt: true,
      onCommand: ({ command, item }) => {
        switch (command) {
          case "addItem":
            setAiAddedTask(item);
            break;

          default:
            console.log("unknown command");
        }
      },

      onEvent: function (e) {
        const { name, text } = e;

        switch (name) {
          case "parsed":
            const userResponseObject = { [e.reqId]: text };
            setParsed(userResponseObject);
            break;
          case "text":
            const saraResponseObject = { [e.ctx.reqId]: text };
            console.log(saraResponseObject)
            setSaraReply(saraResponseObject);
            break;
          default:
        }
      },
    });
  }, [aiAddedTask, saraReply, parsed, alanBtnRef]);

  return (
    <>
      <CssBaseline />
      <SEO />
      <div className="App">
        <ResponsiveDrawer drawerContent={<ToDoList task={aiAddedTask} />}>
          <ChatBox
            saraReply={saraReply}
            userInput={parsed}
            textMessage={textMessage}
            setTextMessage={setTextMessage}
            sendTextMessage={sendTextMessage}
          />
        </ResponsiveDrawer>
      </div>
    </>
  );
}

export default withSplashScreen(App, 1000);
