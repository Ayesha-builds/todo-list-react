import { useState } from "react";

function TodoItem({ todo, toggleTodo, deleteTodo, editTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  const handleEdit = () => {
    if (isEditing) {
      editTodo(todo.id, newText); // Save edited text
    }
    setIsEditing(!isEditing); // Toggle edit mode
  };

  const priorityColors = { High: "red", Medium: "orange", Low: "green" };

  return (
    <li
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: "10px",
        padding: "8px",
        border: "1px solid #ccc",
        borderRadius: "6px",
      }}
    >
      {/* Left: Checkbox + Task Text */}
      <div style={{ display: "flex", alignItems: "center", flex: 1 }}>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleTodo(todo.id)}
          style={{ marginRight: "10px" }}
        />
        {isEditing ? (
          <input
            type="text"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
            style={{ flex: 1, marginRight: "10px" }}
          />
        ) : (
          <span
            style={{
              textDecoration: todo.completed ? "line-through" : "none",
              color: priorityColors[todo.priority],
            }}
          >
            {todo.text} {todo.completed && "(Completed)"}
          </span>
        )}
      </div>

      {/* Right: Edit + Delete Buttons */}
      <div>
        <button
          onClick={handleEdit}
          style={{
            marginRight: "5px",
            padding: "4px 8px",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          {isEditing ? "Save" : "Edit"}
        </button>
        <button
          onClick={() => deleteTodo(todo.id)}
          style={{
            padding: "4px 8px",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Delete
        </button>
      </div>
    </li>
  );
}

export default TodoItem;
