import { useState } from "react";
export default function Form({ todos, settodos }) {
  const [todo, settodo] = useState("");

  function handlesubmit(e) {
    e.preventDefault();
    settodos([...todos, todo]);
    settodo("");
  }

  return (
    <form onSubmit={handlesubmit}>
      <input
        onChange={(e) => settodo(e.target.value)}
        value={todo}
        type="text"
      />
      <button type="submit">Add</button>
    </form>
  );
}
