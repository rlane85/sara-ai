//router
import { useLoaderData } from "react-router-dom";

//material components
import { Paper, Typography } from "@mui/material";

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

  return (
    <Paper>
      <Typography>user: {loaderData ? loaderData.username : ""}</Typography>
      <Typography>
        todos:{" "}
        {loaderData
          ? loaderData.list.map((todo, i) => {
              return JSON.stringify(todo) + ", ";
            })
          : ""}
      </Typography>
    </Paper>
  );
};
