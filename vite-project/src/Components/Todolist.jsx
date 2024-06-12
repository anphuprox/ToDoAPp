import ToDoItem from "./ToDoItem";
import styles from "./Todolist.module.css";
export default function Todilist({ todos, settodos }) {
  const sortedtodos = todos
    .slice()
    .sort((a, b) => Number(a.done) - Number(b.done));
  return (
    <div className={styles.list}>
      {sortedtodos.map((item) => (
        <ToDoItem
          key={item.name}
          item={item}
          todos={todos}
          setTodos={settodos}
        />
      ))}
    </div>
  );
}
