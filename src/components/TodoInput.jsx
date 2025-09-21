import { useState } from "react";

function TodoInput({ addTodo }) {
  const [text, setText] = useState("");
  const [priority, setPriority] = useState("Medium");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo({ text, priority });
    setText("");
    setPriority("Medium");
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter a task"
        style={{ padding: "8px", width: "180px" }}
      />
      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
        style={{ marginLeft: "10px", padding: "8px" }}
      >
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>
      <button
        type="submit"
        style={{ marginLeft: "10px", padding: "8px 12px" }}
      >
        Add
      </button>
    </form>
  );
}

export default TodoInput;
