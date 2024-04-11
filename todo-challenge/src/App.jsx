// App.jsx

import React, { useState } from "react";
import "./App.css";
import { ToDoList } from "./components/ToDoList.jsx";
import { ToDoInput } from "./components/ToDoInput.jsx";
import { Stats } from "./components/Stats.jsx";

function App() {
  const [toDoList, setToDoList] = useState([]);
  const [filter, setFilter] = useState("All"); // Initialize filter state

  const addTask = (taskName) => {
    const newTask = { taskName, checked: false };
    setToDoList([...toDoList, newTask]);
  };

  const deleteTask = (deleteTaskName) => {
    setToDoList(toDoList.filter((task) => task.taskName !== deleteTaskName));
  };

  const toggleCheck = (taskName) => {
    setToDoList((prevToDoList) =>
      prevToDoList.map((task) =>
        task.taskName === taskName ? { ...task, checked: !task.checked } : task
      )
    );
  };

  const clearCompleted = () => {
    setToDoList(toDoList.filter((task) => !task.checked));
  };

  const filterTasks = (filter) => {
    setFilter(filter);
  };

  // Filter tasks based on the selected filter
  const filteredTasks =
    filter === "All"
      ? toDoList
      : filter === "Active"
      ? toDoList.filter((task) => !task.checked)
      : toDoList.filter((task) => task.checked);

  return (
    <>
      <div className="container">
        <h1>To Do List</h1>
        <ToDoList
          addTask={addTask}
          tasks={filteredTasks}
          deleteTask={deleteTask}
          toggleCheck={toggleCheck}
        />
        <div className="toDoList">
          <span>To do</span>
          <ul className="list-items">
            {filteredTasks.map((task, key) => (
              <ToDoInput
                task={task}
                key={key}
                deleteTask={deleteTask}
                toggleCheck={toggleCheck}
              />
            ))}
          </ul>
          {filteredTasks.length === 0 ? (
            <p className="notify">You are done!</p>
          ) : null}
        </div>
      </div>
      <Stats filterTasks={filterTasks} clearCompleted={clearCompleted} />
    </>
  );
}

export default App;
