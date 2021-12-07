import React from "react";

//
//
function Todo({ id, textvalue, dueDate, todos, setTodos, status }) {
  //

  //Events
  function deleteHandler() {
    setTodos(todos.filter((el) => el.id !== id));
  }
  function completeHandler() {
    setTodos(
      todos.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  }

  //
  return (
    <div className="todo">
      <li className={`todo-item ${status ? "completed" : ""}`}>
        {`${textvalue} | ${dueDate ? dueDate : ""}`}
      </li>
      <button onClick={completeHandler} className="complete-btn">
        <i className="fas fa-check"></i>
      </button>
      <button onClick={deleteHandler} className="trash-btn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
}

export default Todo;
