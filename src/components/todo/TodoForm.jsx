const TodoForm = ({ handleSubmit, TodoText, handleChangeTodoText }) => {
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={TodoText} onChange={handleChangeTodoText} />
      <button type="submit">제출하기</button>
    </form>
  );
};

export default TodoForm;
