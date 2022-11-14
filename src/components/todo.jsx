import { useState } from "react";
import TodoForm from "./todoForm";
import { v4 as uuid } from "uuid";
import TodoList from "./todoList";
import TodoStatistics from "./todoStatistics";

const Todo = () => {
  const [todos, setTodos] = useState([]);

  const handleTodosOnSubmit = (title) => {
    setTodos((todos) => [
      ...todos,
      {
        title,
        id: uuid(),
        isDone: false,
        createdAt: new Date(),
      },
    ]);
  };

  const handleIsDoneChanged = (id, isDone) => {
    setTodos((todos) =>
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            isDone: typeof isDone === "boolean" ? isDone : !todo.isDone,
          };
        }
        return todo;
      })
    );
  };

  const handleRemoveTodo = (id) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  };

  const handleReOrganizedTodos = () => {
    setTodos((todos) =>
      todos.sort((todo) => {
        return todo.isDone === true ? 0 : -1;
      })
    );
  };

  return (
    <div className="">
      <TodoForm onSubmit={handleTodosOnSubmit} />
      <TodoStatistics todos={todos} />
      <TodoList
        todos={todos}
        onIsDoneChanged={handleIsDoneChanged}
        onClickRemoveTodo={handleRemoveTodo}
        onChangeReOrganizedTodos={handleReOrganizedTodos}
      />
    </div>
  );
};

export default Todo;
