import { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const SAMPLE_TODOS = [
  { id: 1, text: "Buy milk", completed: false },
  { id: 2, text: "Clean the house", completed: false },
  { id: 3, text: "Go for a run", completed: false },
  { id: 4, text: "Finish homework", completed: false },
  { id: 5, text: "Call mom", completed: false },
  { id: 6, text: "Buy groceries", completed: false },
  { id: 7, text: "Walk the dog", completed: false },
  { id: 8, text: "Read a book", completed: false },
  { id: 9, text: "Do laundry", completed: false },
  { id: 10, text: "Write code", completed: false },
];

const TodoContainer = () => {
  const [todos, setTodos] = useState(SAMPLE_TODOS);
  const [TodoText, setTodoText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!TodoText.trim()) {
      return;
    }

    setTodos([
      { id: crypto.randomUUID(), text: TodoText, completed: false },
      ...todos,
    ]);

    setTodoText("");
  };

  const handleChangeTodoText = (e) => {
    setTodoText(e.target.value);
  };

  const handleToggleCompleted = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              completed: !todo.completed,
            }
          : todo
      )
    );
  };

  const handleDelete = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <TodoForm
        handleSubmit={handleSubmit}
        TodoText={TodoText}
        handleChangeTodoText={handleChangeTodoText}
      />

      <TodoList
        todos={todos}
        handleToggleCompleted={handleToggleCompleted}
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default TodoContainer;
