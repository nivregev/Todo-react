const TodoStatistics = ({ todos }) => {
  const NumberOfTodosThatDone = todos.filter((todo) => todo.isDone === true);
  return (
    <div className="text-center mt-3">
      {NumberOfTodosThatDone.length}/{todos.length}
    </div>
  );
};

export default TodoStatistics;
