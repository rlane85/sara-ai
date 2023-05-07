//react imports
import { useEffect, useState, useRef } from "react";

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
    welcomeMsg: "Default Reply",
  });
  const [saraReply, setSaraReply] = useState({
    welcomeMsg: "Welcome",
  });

  useEffect(() => {
    // console.log(saraReply);
    // var greetingWasSaid = false;
    alanBtnRef.btnInstance = alanBtn({
      key: process.env.REACT_APP_ALANAI_KEY,
      showOverlayOnMicPermissionPrompt: true,
      onCommand: ({ command, item }) => {
        // console.log(command);
        // console.log(item);


        switch (command) {
          case "addItem":
            setAiAddedTask(item);
            // addTask(item);

            break;

          default:
            console.log("unknown command");
        }
      },

      onEvent: function (e) {
        const { name, text, final } = e;

        switch (name) {
          case "parsed":
            console.log(e);
            const userResponseObject = {[e.reqId]: text}
            console.log(userResponseObject)
            setParsed(userResponseObject);
            break;
          case "text":
            // console.log(e);
            const saraResponseObject = { [e.ctx.reqId]: text };
            // console.log(saraResponseObject);

            setSaraReply(saraResponseObject);
            break;
        }
      },
    });
  }, [aiAddedTask, saraReply, parsed, alanBtnRef]);


  // console.log(parsed, "parsed")
  return (
    <>
      <CssBaseline />
      <div className="App">
        <ResponsiveDrawer drawerContent={<ToDoList task={aiAddedTask} />}>
          <ChatBox saraReply={saraReply} userInput={parsed} />
        </ResponsiveDrawer>

        <h1>{aiAddedTask}</h1>

      </div>
    </>
  );
}

export default withSplashScreen(App, 1000);
