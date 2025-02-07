const TodoItem = ({ completed, text, toggleTodoCompleted, DeleteTodo, id }) => {
  return (
    <li>
      <p
        style={{
          textDecoration: completed ? "line-through" : "none",
        }}
      >
        {text}
      </p>

      <div>
        <button onClick={() => toggleTodoCompleted(id)}>
          {completed ? "취소하기" : "완료하기"}
        </button>

        <button onClick={() => DeleteTodo(id)}>삭제하기</button>
      </div>
    </li>
  );
};

export default TodoItem;
