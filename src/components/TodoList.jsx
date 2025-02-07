import { useState } from "react";
import TodoItem from "./todo/TodoItem";
import TodoForm from "./todo/TodoForm";

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

const TodoList = () => {
  const [todos, setTodos] = useState(SAMPLE_TODOS);
  const [TodoText, setTodoText] = useState("");
  //const [const, setConst] = useState(0);

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
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const handleDelete = (id) => {
    const filteredTodos = todos.filter((todo) => {
      if (todo.id === id) {
        return false;
      }

      return true;
    });

    setTodos(filteredTodos);
  };

  return (
    <div>
      <TodoForm
        handleSubmit={handleSubmit}
        TodoText={TodoText}
        handleChangeTodoText={handleChangeTodoText}
      />
      <ul>
        {todos.map(({ id, text, completed }) => (
          <TodoItem
            key={id}
            completed={completed}
            text={text}
            handleToggleCompleted={handleToggleCompleted}
            handleDelete={handleDelete}
            id={id}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
