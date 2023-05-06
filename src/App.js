import "./App.css";
import { useEffect, useState } from "react";
//mock data
import data from "./data.json";
//components
import Header from "./Header";
import ToDoList from "./ToDoList";
import ToDoForm from "./ToDoForm";
import alanBtn from "@alan-ai/alan-sdk-web";
function App() {
  const [item, setItem] = useState("");
  useEffect(() => {
    alanBtn({
      key: process.env.REACT_APP_ALANAI_KEY,
      onCommand: ({ command, item }) => {
        console.log(command);
        console.log(item);

        switch (command) {
          case "addItem":
            setItem(item);
            addTask(item);

            break;
          case "addConciousness":
            addConciousness(item);

            break;
          default:
            console.log("unknown command");
        }
      },
    });
  }, [item]);  /* eslint-disable-line */

  const [toDoList, setToDoList] = useState(data);
  const [conciousness, setConciousness] = useState("");

  const handleToggle = (id) => {
    let mapped = toDoList.map((task) => {
      return task.id === Number(id)
        ? { ...task, complete: !task.complete }
        : { ...task };
    });
    setToDoList(mapped);
  };

  const handleFilter = () => {
    let filtered = toDoList.filter((task) => {
      return !task.complete;
    });
    setToDoList(filtered);
  };

  const addTask = (userInput) => {
    let copy = [...toDoList];
    copy = [
      ...copy,
      { id: toDoList.length + 1, task: userInput, complete: false },
    ];
    setToDoList(copy);
  };

  const addConciousness = (userInput) => {
    setConciousness(userInput);
  };

  return (
    <div className="App">
      <Header />
      {
        <ToDoList
          toDoList={toDoList}
          handleToggle={handleToggle}
          handleFilter={handleFilter}
        />
      }
      <ToDoForm addTask={addTask} />
      <h1>{item}</h1>
      <h1>{conciousness}</h1>
    </div>
  );
}

export default App;
