//router
import { Form, useActionData } from "react-router-dom";

//material components
import { InputBase, IconButton, Divider, Typography } from "@mui/material";

//material icons
import SendIcon from "@mui/icons-material/Send";

//fetcher
import { createToDo } from "../../controllers/createToDo";

export async function action({ request, params }) {
  let formData = await request.formData();
  let description = formData.get("description");
  let priority = formData.get("priority");
  let duedate = formData.get("duedate");
  const response = await createToDo(description, priority, duedate);

  if (response) return response;
  else return null;
}

export const CreateToDo = () => {
  const actionData = useActionData();

  return (
    <Form method="post" id="createtodo">
      <Typography variant="h1">Create To Do</Typography>

      <InputBase
        inputProps={{ "aria-label": "description" }}
        placeholder="description"
        type="text"
        name="description"
      />
      <Divider />
      <InputBase
        inputProps={{ "aria-label": "priority" }}
        placeholder="priority"
        type="text"
        name="priority"
      />
      <Divider />
      <InputBase
        inputProps={{ "aria-label": "duedate" }}
        placeholder="duedate"
        type="text"
        name="duedate"
      />

      <IconButton
        color="primary"
        sx={{ p: "10px" }}
        aria-label="submit signup"
        type="submit"
      >
        <SendIcon />
      </IconButton>
      <Typography>Response: {actionData ? JSON.stringify(actionData) : "none yet"}</Typography>
    </Form>
  );
};
