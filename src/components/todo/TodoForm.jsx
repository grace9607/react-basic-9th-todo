import { useState } from "react";

const TodoForm = ({ addTodos }) => {
  const [TodoText, setTodoText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!TodoText.trim()) {
      return;
    }

    addTodos(TodoText);

    setTodoText("");
  };

  const handleChangeTodoText = (e) => {
    setTodoText(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={TodoText} onChange={handleChangeTodoText} />
      <button type="submit">제출하기</button>
    </form>
  );
};

export default TodoForm;
