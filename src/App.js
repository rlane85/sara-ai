import "./App.css";
import { useEffect, useState, useRef } from "react";
//mock data

//components
import { ToDoList } from "./ToDoList";
import alanBtn from "@alan-ai/alan-sdk-web";

function App() {
  const alanBtnRef = useRef({}).current;
  const [aiAddedTask, setAiAddedTask] = useState("");
  const [recognized, setRecognized] = useState("");
  
  const [conciousness, setConciousness] = useState("");


  useEffect(() => {
    var greetingWasSaid = false;
    alanBtnRef.btnInstance = alanBtn({
      key: process.env.REACT_APP_ALANAI_KEY,
      showOverlayOnMicPermissionPrompt: true,
      onCommand: ({ command, item }) => {
        console.log(command);
        console.log(item);

        switch (command) {
          case "addItem":
            setAiAddedTask(item);
            // addTask(item);

            break;
          case "addConciousness":
            addConciousness(item);

            break;
          default:
            console.log("unknown command");
        }
      },
      onButtonState: async function (status) {
        console.log(status);
      },
      onEvent: function ({ name, text, final }) {
        console.log(name);
        switch (name) {
          case "recognized":
            setRecognized(text);
            break;
          default:
            setRecognized("");
        }
      },
    });
  }, [aiAddedTask]); /* eslint-disable-line */

  const addConciousness = (userInput) => {
    setConciousness(userInput);
  };

  const Buttons = (
    <div>
      <button
        onClick={() => {
          alanBtnRef.btnInstance.activate();
        }}
      >
        activate the Alan AI button
      </button>
      <button
        onClick={() => {
          alanBtnRef.btnInstance.deactivate();
        }}
      >
        deactivate the Alan AI button
      </button>
    </div>
  );

  return (
    <div className="App">
      <ToDoList task={aiAddedTask}
      />
      <p>{recognized}</p>
      {Buttons}
      <h1>{aiAddedTask}</h1>
      <h1>{conciousness}</h1>
    </div>
  );
}

export default App;
