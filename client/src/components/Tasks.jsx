import React, { useState, useEffect } from "react";
import Paper from "@mui/material/Paper";
import { fetchTodos, addTodo, deleteTodo } from "../services/todoService";
import TodoTable from "./TodoTable";
import TodoForm from "./TodoForm";

export default function Tasks() {
  const [todoList, setTodoList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const data = await fetchTodos();
      setTodoList(data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleAddTodo = async (newTodo) => {
    try {
      await addTodo(newTodo);
      await fetchData(); // Refresh the list
    } catch (error) {
      console.error("Error adding todo:", error);
    }
  };

  const handleDeleteTodo = async (id) => {
    try {
      await deleteTodo(id);
      await fetchData(); // Refresh the list
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <>
      <h1>TODO List</h1>
      <Paper elevation={3}>
        <TodoTable todoList={todoList} onDelete={handleDeleteTodo} />
        <TodoForm onSubmit={handleAddTodo} />
      </Paper>
    </>
  );
}
