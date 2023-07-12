//react imports
import { useState, useEffect } from "react";

//router
import { useLoaderData } from "react-router-dom";

//material components
import { Paper, } from "@mui/material";

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

export const ListToDos = () => {
  const loaderData = useLoaderData();
  const [toDoList, setToDoList] = useState(loaderData.list);

  useEffect(() => {
    //I think this may be causing an echo with useLoaderData() because every time a modify todo form is submited, it is re-requesting the list from get /todo
    //This shouldn't be necessary because the response from PUT /todo?change... contains the modified list of todos
    //I'm going to leave it for now, because it'll all get refactored soon enough
    setToDoList(loaderData.list);
  }, [loaderData.list]);

  const ToDoList = null
  // toDoList.map((todo, i) => {
  //   return <ToDo key={i} {...todo} />;
  // });

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Paper>{loaderData ? ToDoList : ""}</Paper>
    </LocalizationProvider>
  );
};
