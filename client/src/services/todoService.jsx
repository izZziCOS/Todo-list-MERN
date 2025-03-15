// todoService.js
const API_URL = "http://localhost:3000";

export const fetchTodos = async () => {
  const response = await fetch(API_URL);
  if (!response.ok) throw new Error("Network response error");
  return response.json();
};

export const addTodo = async (newTodo) => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newTodo),
  });
  if (!response.ok) throw new Error("Failed to add todo");
  return response.json();
};

export const deleteTodo = async (id) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) throw new Error("Failed to delete todo");
  return response.json();
};
