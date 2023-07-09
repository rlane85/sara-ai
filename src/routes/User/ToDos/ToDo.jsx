//react imports
import { useState } from "react";

//router
import { useSubmit } from "react-router-dom";

//fetcher
import { modifyToDo } from "../../controllers/modifyToDo";
//material componenets
import {
  Box,
  InputAdornment,
  Input,
  InputLabel,
  TextField,
  Typography,
  IconButton,
  Slider,
} from "@mui/material";

//material icons
import EditIcon from "@mui/icons-material/Edit";
import SaveAltIcon from "@mui/icons-material/SaveAlt";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

export const ToDo = ({
  id,
  description,
  priority,
  duedate,
  status,
  createdAt,
  updatedAt,
  activitylistId,
}) => {
  const [editing, setEditing] = useState(false);
  // const [toDoDescription, setToDoDescription] = useState(description);
  const [completed, setCompleted] = useState(false);
  const [toDoPriority, setToDoPriority] = useState(priority);

  const submit = useSubmit();

  //removing this for now
  // const Icon = editing ? (
  //   <SaveAltIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
  // ) : (
  //   <EditIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
  // );

  const handleSubmitModify = (descriptionText, newPriorityObject) => {
    submit(
      new URLSearchParams({
        description: descriptionText,
        ...newPriorityObject,
      }),
      { method: "PUT" }
    );
  };

  const handleSubmitDelete = (descriptionText) => {
    submit(new URLSearchParams({ description: descriptionText }), {
      method: "DELETE",
    });
  };

  const Icon = null;

  const textFieldSx = {
    textDecoration: status === "done" ? "line-through" : "none",
    input: { cursor: editing ? "text" : "default" },
  };

  const statusMap = {
    todo: "warning",
    inprogress: "success",
  };

  return (
    <Box sx={{ "& > :not(style)": { m: 1 } }}>
      <Slider
        sx={{ width: "80%" }}
        size="small"
        value={toDoPriority}
        aria-labelledby="priority"
        name="priority"
        id="priority"
        step={1}
        min={0}
        max={10}
        onChange={(event) => {
          setToDoPriority(event.target.value);
        }}
        onChangeCommitted={(event) => {
          handleSubmitModify(description, { priority: toDoPriority });
        }}
      />
      <Box sx={{ display: "flex", alignItems: "flex-end" }}>
        <IconButton
          aria-label="edit-todo-description"
          type={editing ? "button" : "submit"}
          name="description"
          onClick={() => {
            setEditing(!editing);
          }}
        >
          {Icon}
        </IconButton>
        <TextField
          sx={{ ...textFieldSx }}
          focused={!editing}
          color={statusMap[status]}
          variant="outlined"
          name="description"
          value={description}
          onChange={(event) => {
            // if (editing) setToDoDescription(event.target.value);
            // else return null;
          }}
          // going to use for status=done
          // onClick={() => setCompleted(!completed)}
        />
        <IconButton
          aria-label="delete-todo-description"
          onClick={() => {
            handleSubmitDelete(description);
          }}
        >
          <DeleteForeverIcon />
        </IconButton>
      </Box>
    </Box>
  );
};
