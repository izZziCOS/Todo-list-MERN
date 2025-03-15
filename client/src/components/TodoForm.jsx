import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";

export default function TodoForm({ onSubmit }) {
  const [newTodoValue, setNewTodoValue] = useState(" ");
  const [newTodoPriority, setNewTodoPriority] = useState("Low");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name: newTodoValue, priority: newTodoPriority });
    setNewTodoValue(" ");
    setNewTodoPriority("Low");
  };

  return (
    <Box
      component="form"
      sx={{ "& > :not(style)": { m: 1, alignItems: "left" } }}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <TextField
        label="Task name"
        value={newTodoValue}
        onChange={(e) => setNewTodoValue(e.target.value)}
        sx={{ height: "56px", width: "45ch" }}
      />
      <FormControl sx={{ width: "12.5ch" }}>
        <InputLabel>Priority</InputLabel>
        <Select
          label="Priority"
          value={newTodoPriority}
          onChange={(e) => setNewTodoPriority(e.target.value)}
        >
          <MenuItem value={"High"}>High</MenuItem>
          <MenuItem value={"Medium"}>Medium</MenuItem>
          <MenuItem value={"Low"}>Low</MenuItem>
        </Select>
      </FormControl>
      <Button type="submit" variant="contained" sx={{ height: "56px" }}>
        Add new task
      </Button>
    </Box>
  );
}
