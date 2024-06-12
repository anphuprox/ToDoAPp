import { useState } from "react";
import styles from "./Form.module.css";
export default function Form({ todos, settodos }) {
  const [todo, settodo] = useState({ name: "", done: false });

  function handlesubmit(e) {
    e.preventDefault();
    settodos([...todos, todo]);
    settodo({ name: "", done: false });
  }

  return (
    <form className={styles.todoform} onSubmit={handlesubmit}>
      <div className={styles.inputCointainer}>
        <input
          className={styles.modernInput}
          onChange={(e) => settodo({ name: e.target.value, done: false })}
          value={todo.name}
          type="text"
        />
        <button className={styles.modernButton} type="submit">
          Add
        </button>
      </div>
    </form>
  );
}
