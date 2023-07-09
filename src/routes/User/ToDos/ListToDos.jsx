//react imports
import { useState, useEffect } from "react";

//router
import { useLoaderData } from "react-router-dom";

//material components
import { Paper, Typography, Divider } from "@mui/material";

//components
import { ToDo } from "./ToDo";

//fetcher
import { listToDos } from "../../controllers/listToDos";

export async function loader({ request, params }) {
  const response = await listToDos();
  // console.log(response);
  if (response) return response;
  else return null;
}

export const ListToDos = () => {

  const loaderData = useLoaderData();
  const [toDoList, setToDoList] = useState(loaderData.list);

  useEffect(() => {
    setToDoList(loaderData.list);
  }, [loaderData.list]);
  
  return (
    <Paper>
      <Typography>todos: </Typography>
      {loaderData
        ? toDoList.map((todo, i) => {
            return <ToDo key={i} {...todo} />;
          })
        : ""}
    </Paper>
  );
};
