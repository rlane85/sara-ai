//router
import { useLoaderData } from "react-router-dom";

//material components
import { Paper, Typography } from "@mui/material";

//fetcher
import { deleteActivityList } from "../controllers/deleteActivityList";

export async function loader({ request, params }) {
  const response = await deleteActivityList();
  // console.log(response);
  if (response) return response.msg;
  else return null;
}

export const DeleteActivityList = () => {
  const loaderData = useLoaderData();

  return (
    <Paper>
      <Typography>{loaderData ? loaderData : ""}</Typography>
    </Paper>
  );
};
