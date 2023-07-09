//react imports
import { useState } from "react";

//router
import { useSubmit } from "react-router-dom";

//material componenets
import { Box, TextField, IconButton, Slider, Divider } from "@mui/material";

import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";

//material icons
// import EditIcon from "@mui/icons-material/Edit";
// import SaveAltIcon from "@mui/icons-material/SaveAlt";
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
  const [toDoPriority, setToDoPriority] = useState(priority);
  const [dueDate, setDueDate] = useState(dayjs(duedate));
  const [chosenDate, setChosenDate] = useState(dueDate);

  const submit = useSubmit();

  //removing this for now
  // const Icon = editing ? (
  //   <SaveAltIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
  // ) : (
  //   <EditIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
  // );

  const handleSubmitModify = (descriptionText, newToDoObject) => {
    newToDoObject.duedate = dayjs(newToDoObject.duedate).isValid()
      ? dayjs(newToDoObject.duedate).format("YYYY/MM/DD")
      : "none";
    submit(
      { description: descriptionText, ...newToDoObject },
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

  const statusColorMap = {
    todo: "warning",
    inprogress: "secondary",
    done: "success",
  };

  return (
    <Box sx={{ "& > :not(style)": { m: 1 } }}>
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
          color={statusColorMap[status]}
          variant="outlined"
          name="description"
          value={description}
          onChange={(event) => {
            // if (editing) setToDoDescription(event.target.value);
            // else return null;
          }}
          onClick={() => {
            const newStatus = (status) => {
              switch (status) {
                case "todo":
                  return "done";
                  break;
                default:
                  return "todo";
                  break;
              }
            };
            handleSubmitModify(description, {
              status: newStatus(status),
              priority,
              duedate,
            });
          }}
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

      <Slider
        sx={{ width: "80%" }}
        size="small"
        value={toDoPriority}
        valueLabelDisplay="auto"
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
          handleSubmitModify(description, {
            priority: toDoPriority,
            status,
            duedate,
          });
        }}
      />
      <DatePicker
        value={chosenDate}
        onChange={(newValue) => setChosenDate(newValue)}
        onAccept={(date) => {
          handleSubmitModify(description, {
            priority: priority,
            status,
            duedate: date,
          });
          setDueDate(date);
          console.log(date.toString());
        }}
      />

      <Divider />
    </Box>
  );
};
