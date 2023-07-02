//router
import { Form, useActionData } from "react-router-dom";

//material components
import {
  InputBase,
  IconButton,
  Paper,
  Divider,
  Typography,
} from "@mui/material";

//material icons
import SendIcon from "@mui/icons-material/Send";

import { login } from "./controllers/login";

export async function action({ request, params }) {
  let formData = await request.formData();
  let user = formData.get("user");
  let pass = formData.get("pass");
  const response = await login(user, pass);
  console.log(response);
  return response.msg;
}

export const Login = () => {
  const actionData = useActionData();

  return (
    <Form method="post" id="login">
      <Paper sx={{ p: "2px 4px", display: "flex", alignItems: "center" }}>
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          inputProps={{ "aria-label": "user name" }}
          placeholder="username"
          type="text"
          name="user"
        />
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          inputProps={{ "aria-label": "password" }}
          placeholder="password"
          type="text"
          name="pass"
        />

        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
        <IconButton
          color="primary"
          sx={{ p: "10px" }}
          aria-label="submit login"
          type="submit"
        >
          <SendIcon />
        </IconButton>
      </Paper>
      <Typography>Response: {actionData ? actionData : "none yet"}</Typography>
    </Form>
  );
};
