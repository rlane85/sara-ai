//react imports
import { useState } from "react";

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
  const [toDoDescription, setToDoDescription] = useState(description);
  const [completed, setCompleted] = useState(false);
  const [toDoPriority, setToDoPriority] = useState(priority);

  const Icon = editing ? (
    <SaveAltIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
  ) : (
    <EditIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
  );

  const textFieldSx = {
    textDecoration: completed ? "line-through" : "none",
    input: { cursor: editing ? "text" : "default" },
  };

  const statusMap = {
    todo: "warning",
    inprogress: "success",
    complete: "secondary",
  };

  return (
    <Box sx={{ "& > :not(style)": { m: 1 } }}>
      <Box sx={{ display: "flex", alignItems: "flex-end" }}>
        <IconButton
          aria-label="edit-todo"
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
          variant="standard"
          id="description"
          value={toDoDescription}
          onChange={(event) => {
            if (editing) setToDoDescription(event.target.value);
            else return null;
          }}
          onClick={() => setCompleted(!completed)}
        />

      </Box>
      <Slider
          sx={{width: "80%"}}
          size="small"
          value={toDoPriority}
          aria-labelledby="priority"
          step={1}
          min={0}
          max={10}
          onChange={(event) => {
            setToDoPriority(event.target.value);
          }}
          onChangeCommitted={(event) => {
            console.log("insert send to server function here(", toDoPriority);
            alert("sure thing! we'll set this ToDo's priority to " + toDoPriority)
          }}
        />
    </Box>
  );
};
