// import logo from "./logo.svg";
import React, { useState, useEffect } from "react";
import "./App.css";
//importing components
import Form from "./components/Form";
import TodoList from "./components/List";

function App() {
  const [inputText, setInputText] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [todos, setTodos] = useState([]);
  const [showStatus, setShowStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);
  //useEffect
  useEffect(() => {
    getLocalTodos();
  }, []);
  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [showStatus, todos]);

  //
  function filterHandler() {
    switch (showStatus) {
      case "completed":
        setFilteredTodos(
          todos.filter((todo) => {
            return todo.completed === true;
          })
        );
        break;
      case "uncompleted":
        setFilteredTodos(
          todos.filter((todo) => {
            return todo.completed === false;
          })
        );
        break;
      case "nearestDueDate":
        let copytodos = todos.filter((todo) => todo.dueDate);
        copytodos.sort((a, b) => a.estimatedTime - b.estimatedTime);

        setFilteredTodos([...copytodos]);
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  }
  function saveLocalTodos() {
    localStorage.setItem("todos", JSON.stringify(todos));
  }
  function getLocalTodos() {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let todolocal = JSON.parse(localStorage.getItem("todos"));
      setTodos(todolocal);
    }
  }
  //
  return (
    <div className="App">
      <header>
        <h1>React ToDo List</h1>
      </header>
      <Form
        todos={todos}
        setTodos={setTodos}
        inputText={inputText}
        setInputText={setInputText}
        setShowStatus={setShowStatus}
        dueDateInput={dueDate}
        setDueDate={setDueDate}
      />
      <TodoList
        filteredTodos={filteredTodos}
        todos={todos}
        setTodos={setTodos}
      />
    </div>
  );
}

export default App;
