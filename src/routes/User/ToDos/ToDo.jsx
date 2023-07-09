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
} from "@mui/material";

import { useTheme } from "@mui/material/styles";

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
  const theme = useTheme();

  const [editing, setEditing] = useState(false);
  const [toDoDescription, setToDoDescription] = useState(description);
  const [completed, setCompleted] = useState(false);

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
    complete: "secondary"
  }

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
      {status}
      {priority}
    </Box>
  );
};
