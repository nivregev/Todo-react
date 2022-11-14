import TodoItem from "./todoItem";

const TodoList = ({
  todos,
  onIsDoneChanged,
  onClickRemoveTodo,
  onChangeReOrganizedTodos,
}) => {
  return (
    <div className="mt-2">
      <ul className="list-group">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            {...todo}
            onIsDoneChanged={() => onIsDoneChanged(todo.id)}
            onClickRemoveTodo={() => onClickRemoveTodo(todo.id)}
            onChangeReOrganizedTodos={onChangeReOrganizedTodos}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
