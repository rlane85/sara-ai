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

import { signup } from "./controllers/signup";

export async function action({ request, params }) {
  let formData = await request.formData();
  let user = formData.get("user");
  let pass = formData.get("pass");
  let email = formData.get("email");
  const response = await signup(user, pass, email);

  // console.log(response);
  if (response.msg) return response.msg;
  else return null;
}

export const Signup = () => {
  const actionData = useActionData();

  return (
    <Form method="post" id="signup">
      <Typography variant="h1">Signup</Typography>

        <InputBase
          inputProps={{ "aria-label": "user name" }}
          placeholder="username"
          type="text"
          name="user"
        />
        <Divider />
        <InputBase
          inputProps={{ "aria-label": "password" }}
          placeholder="password"
          type="password"
          name="pass"
        />
        <Divider />
        <InputBase
          inputProps={{ "aria-label": "email" }}
          placeholder="email"
          type="text"
          name="email"
        />

      <IconButton
        color="primary"
        sx={{ p: "10px" }}
        aria-label="submit signup"
        type="submit"
      >
        <SendIcon />
      </IconButton>
      <Typography>Response: {actionData ? actionData : "none yet"}</Typography>
    </Form>
  );
};
