//router
import { useLoaderData, redirect } from "react-router-dom";

//material components
import {
  InputBase,
  IconButton,
  Paper,
  Divider,
  Typography,
} from "@mui/material";

//fetcher
import { signout } from "./controllers/signout";

export async function loader({ request, params }) {
  const response = await signout();
  // console.log(response);
  if (response) return redirect("/login");
  else return null;
}

export const Signout = () => {
  const loaderData = useLoaderData();

  return (
    <Paper>
      <Typography>Signing out...</Typography>
    </Paper>
  );
};
