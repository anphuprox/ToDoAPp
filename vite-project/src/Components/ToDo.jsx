import { useState } from "react";
import ToDoItem from "./ToDoItem";
export default function Todo() {
  const [todo, settodo] = useState("");
  const [todos, settodos] = useState([]);

  function handlesubmit(e) {
    e.preventDefault();
    settodos([...todos, todo]);
    settodo("");
  }
  return (
    <div>
      <form onSubmit={handlesubmit}>
        <input
          onChange={(e) => settodo(e.target.value)}
          value={todo}
          type="text"
        />
        <button type="submit">Add</button>
      </form>

      {todos.map((item) => (
        <ToDoItem key={item} item={item} />
      ))}
    </div>
  );
}
