import TodoItem from "./TodoItem";

const TodoList = ({ todos, toggleTodoCompleted, DeleteTodo }) => {
  return (
    <ul>
      {todos.map(({ id, text, completed }) => (
        <TodoItem
          key={id}
          completed={completed}
          text={text}
          toggleTodoCompleted={toggleTodoCompleted}
          DeleteTodo={DeleteTodo}
          id={id}
        />
      ))}
    </ul>
  );
};

export default TodoList;
