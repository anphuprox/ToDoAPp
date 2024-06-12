import { useState } from "react";
import ToDoItem from "./ToDoItem";
import Form from "./Form";
import Todolist from "./Todolist";
import Footer from "./Footer";
export default function Todo() {
  const [todos, setTodos] = useState([]);
  const completed = todos.filter((todo) => todo.done).length;
  const totaltodos = todos.length;
  return (
    <div>
      <Form todos={todos} settodos={setTodos} />
      <Todolist todos={todos} settodos={setTodos} />

      <Footer completedTodos={completed} total={totaltodos} />
    </div>
  );
}
