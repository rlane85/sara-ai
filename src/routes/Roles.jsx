//router
import { useLoaderData } from "react-router-dom";

//material components
import { Paper, Typography } from "@mui/material";


import { roles } from "./controllers/roles";

export async function loader({ request, params }) {
  const response = await roles();
  // console.log(response);
  if (response) return response;
  else return null;
}

export const Roles = () => {
  const loaderData = useLoaderData();

  return (
    <Paper>
      <Typography>user: {loaderData ? loaderData.username : ""}</Typography>
      <Typography>
        roles:{" "}
        {loaderData
          ? loaderData.roles.map((role, i) => {
              return role + ", ";
            })
          : ""}
      </Typography>
    </Paper>
  );
};
