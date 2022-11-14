const TodoItem = ({
  title,
  id,
  createdAt,
  isDone,
  onClickRemoveTodo,
  onIsDoneChanged,
  onChangeReOrganizedTodos,
}) => {
  return (
    <div className="mx-5  rounded-4">
      <li className="list-group-item mt-2">
        <div className="d-flex justify-content-between">
          <div>
            <input
              className="mx-2"
              type="checkBox"
              onChange={() => {
                onIsDoneChanged();
                onChangeReOrganizedTodos();
              }}
              checked={isDone}
              id={id}
            />
            <span className="fs-5 fw-semibold ms-3">{title} </span>
          </div>
          <div>
            <span>({createdAt.toLocaleDateString()}) </span>
            <button className="btn btn-danger" onClick={onClickRemoveTodo}>
              X
            </button>
          </div>
        </div>
      </li>
    </div>
  );
};

export default TodoItem;
