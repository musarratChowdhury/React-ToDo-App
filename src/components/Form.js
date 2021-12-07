import React from "react";

//
let dueDate;
//
function Form({
  dueDateInput,
  setDueDate,
  inputText,
  setInputText,
  setTodos,
  todos,
  setShowStatus,
}) {
  function inputTextHandler(e) {
    console.log(e.target.value);
    setInputText(e.target.value);
  }
  function inputDateHandler(e) {
    dueDate = new DateTime(e.target.value);
    setDueDate(dueDate.formattedDate());
    // console.log(dateToYMD(e.target.value));
    // console.log(date.formattedDate());
  }
  function submitTodoHandler(e) {
    e.preventDefault();
    setTodos([
      ...todos,
      {
        text: inputText,
        completed: false,
        id: Math.random() * 1000,
        dueDate: dueDateInput ? dueDateInput : false,
        estimatedTime: dueDateInput ? dueDate.time() : false,
      },
    ]);
    setInputText("");
  }
  function listFilterHandler(e) {
    setShowStatus(e.target.value);
  }
  return (
    <form>
      <input
        onChange={inputTextHandler}
        type="text"
        name=""
        id=""
        value={inputText}
        className="todo-input"
      />
      <input
        onChange={inputDateHandler}
        type="date"
        name="due-date"
        id="due-date"
        className="todo-input"
        required
      />
      {/* <input type="range" name="priority" id="priority-input" /> */}
      <button onClick={submitTodoHandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select
          onChange={listFilterHandler}
          name="todos"
          id=""
          className="filter-todo"
        >
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
          <option value="nearestDueDate">Nearest Due Date</option>
        </select>
      </div>
    </form>
  );
}
//

// function parseTime(date) {
//   return Date.parse(date);
// }
class DateTime {
  constructor(date) {
    this.date = date;
    this.ctime = Date.parse(this.date);
  }
  time() {
    return (this.time = Date.parse(this.date));
  }
  formattedDate() {
    return dateToYMD(this.date);
  }
}
function dateToYMD(date) {
  let dateArr = date.split("-");
  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  let year = dateArr[0];
  let month = dateArr[1];
  let day = dateArr[2];
  switch (month) {
    case "01":
      month = months[0];
      break;
    case "02":
      month = months[1];
      break;
    case "03":
      month = months[2];
      break;
    case "04":
      month = months[3];
      break;
    case "05":
      month = months[4];
      break;
    case "06":
      month = months[5];
      break;
    case "07":
      month = months[6];
      break;
    case "08":
      month = months[7];
      break;
    case "09":
      month = months[8];
      break;
    case "10":
      month = months[9];
      break;
    case "11":
      month = months[10];
      break;
    case "12":
      month = months[11];
      break;

    default:
      break;
  }

  return `${day}-${month}-${year}`;
}
//input text handler function

//
//
export default Form;
