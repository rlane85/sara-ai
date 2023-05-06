import React, { useState, useEffect } from "react";
import { ToDo, Header, ToDoForm } from "./";
import data from "./data.json";
const ToDoList = ({ task }) => {
    console.log(task, "task")
    useEffect(() => {
        console.log(task, "task")
        addTask(task)
    }, [task])
  const [toDoList, setToDoList] = useState(data);
  const addTask = (userInput) => {
    let copy = [...toDoList];
    copy = [
      ...copy,
      { id: toDoList.length + 1, task: userInput, complete: false },
    ];
    setToDoList(copy);
  };
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

  return (
    <div>
      <Header />
      <ToDoForm addTask={addTask} />
      {toDoList.map((todo) => {
        return (
          <ToDo
            key={todo.id + todo.task}
            todo={todo}
            handleToggle={handleToggle}
            handleFilter={handleFilter}
          />
        );
      })}
      <button style={{ margin: "20px" }} onClick={handleFilter}>
        Clear Completed
      </button>
    </div>
  );
};

export { ToDoList };
