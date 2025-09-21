import { useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);

  // Add new todo
  const addTodo = ({ text, priority }) => {
    if (text.trim() === "") return;
    setTodos([...todos, { id: Date.now(), text, completed: false, priority }]);
  };

  // Toggle completed status for a single task
  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Edit task text
  const editTodo = (id, newText) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, text: newText } : todo
      )
    );
  };

  // Delete a task
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // Mark all tasks complete/incomplete
  const markAllComplete = () => {
    const allCompleted = todos.every((todo) => todo.completed);
    setTodos(todos.map((todo) => ({ ...todo, completed: !allCompleted })));
  };

  // Clear completed tasks
  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };

  return (
    <div
      style={{
        padding: "20px",
        textAlign: "center",
        maxWidth: "500px",
        margin: "0 auto",
        background: "linear-gradient(to right, #ACB6E5, #74ebd5)",
        borderRadius: "12px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
      }}
    >
      <h1 style={{ marginBottom: "20px" }}>To-Do List</h1>
      <TodoInput addTodo={addTodo} />

      <div style={{ marginBottom: "15px" }}>
        <button
          onClick={markAllComplete}
          style={{
            marginRight: "10px",
            padding: "8px 12px",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          Mark All Complete
        </button>
        <button
          onClick={clearCompleted}
          style={{
            padding: "8px 12px",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          Clear Completed
        </button>
      </div>

      <TodoList
        todos={todos}
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
        editTodo={editTodo}
      />
    </div>
  );
}

export default App;
