//react imports
import { useState, useEffect } from "react";

//router

//material components
import { Paper } from "@mui/material";

//datetime components
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

//components
import { ToDo } from "./ToDo";

//fetcher
import { listToDos } from "../../controllers/listToDos";
import { modifyToDo } from "../../controllers/modifyToDo";

export async function loader({ request, params }) {
  const response = await listToDos();
  // console.log(response);
  if (response) return response;
  else return null;
}

export async function action({ request, params }) {
  const modifyType = request.method;
  const formData = await request.formData();
  const description = formData.get("description");
  const priority = formData.get("priority");
  const duedate = formData.get("duedate");
  const status = formData.get("status");
  const value = {
    priority,
    duedate,
    status,
  };
  const response = await modifyToDo(modifyType, description, value);
  // console.log(priority);
  if (response) return response;
  else return null;
}

// https://stackoverflow.com/questions/9804777/how-to-test-if-a-string-is-json-or-not

function isJson(item) {
  let value = typeof item !== "string" ? JSON.stringify(item) : item;
  try {
    value = JSON.parse(value);
  } catch (e) {
    return false;
  }

  return typeof value === "object" && value !== null;
}

export const ListToDos = ({ wsClient }) => {
  const [toDoList, setToDoList] = useState([]);

  useEffect(() => {
    const todosWsConnection = wsClient();
    todosWsConnection.onopen = () => console.log("todo ws open");
    todosWsConnection.onmessage = (msg) => {
      console.log(msg);
      if (isJson(msg.data)) {
        const { data } = JSON.parse(msg.data);
        setToDoList(data);
      }
    };
  }, []);

  const ToDoList = toDoList.map((todo, i) => {
    return <ToDo key={i} {...todo} />;
  });

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Paper>{ToDoList}</Paper>
    </LocalizationProvider>
  );
};
