import ToDoItem from "./ToDoItem";
export default function Todilist({ todos }) {
  return (
    <div>
      {todos.map((item) => (
        <ToDoItem key={item} item={item} />
      ))}
    </div>
  );
}
