import React from "react";
import Todo from "./Todo";
//
//

function TodoList({ todos, setTodos, filteredTodos }) {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        <h2>Task | Due Date</h2>

        {filteredTodos.map((todo) => {
          return (
            <Todo
              key={todo.id}
              id={todo.id}
              status={todo.completed}
              textvalue={todo.text}
              dueDate={todo.dueDate}
              setTodos={setTodos}
              todos={todos}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default TodoList;
