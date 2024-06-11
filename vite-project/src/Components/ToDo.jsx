import { useState } from "react";
import ToDoItem from "./ToDoItem";
import Form from "./Form";
import Todolist from "./Todolist";
export default function Todo() {
  const [todos, setTodos] = useState([]);
  return (
    <div>
      <Form todos={todos} settodos={setTodos} />
      <Todolist todos={todos} />
    </div>
  );
}
