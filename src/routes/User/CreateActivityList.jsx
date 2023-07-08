//router
import { useLoaderData } from "react-router-dom";

//material components
import { Paper, Typography } from "@mui/material";

//fetcher
import { createActivityList } from "../controllers/createActivityList";

export async function loader({ request, params }) {
  const response = await createActivityList();
  // console.log(response);
  if (response) return response.msg;
  else return null;
}

export const CreateActivityList = () => {
  const loaderData = useLoaderData();

  return (
    <Paper>
      <Typography>{loaderData ? loaderData : ""}</Typography>
    </Paper>
  );
};
