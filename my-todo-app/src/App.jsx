import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import TodoList from "./components/todoList";
function App() {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todos")) || []
  );
  const [numOfTodos, setNumOfTodos] = useState(todos.length);
  const [currentView, setCurrentView] = useState("all");
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    const root = document.getElementById("root");
    const searchInput = document.getElementById("searchInput");
    const todoListContainer = document.getElementById("todoListContainer");
    const checkIcon = document.getElementById("checkIcon");

    root.classList.remove("light", "dark");
    searchInput.classList.remove("light", "dark");
    todoListContainer.classList.remove("light", "dark");
    checkIcon.classList.remove("light", "dark");

    root.classList.add(theme);
    searchInput.classList.add(theme);
    todoListContainer.classList.add(theme);
    checkIcon.classList.add(theme);
  }, [theme]);

  const darkMode = () => {
    setTheme("dark");
  };

  const lightMode = () => {
    setTheme("light");
  };

  const addTodo = (newTodo) => {
    const updatedTodos = [...todos, newTodo];
    setTodos(updatedTodos);
    setNumOfTodos(updatedTodos.length);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
    console.log(updatedTodos);
  };

  const removeTodo = (buttonId) => {
    const currentTodoList = [...todos];
    const updatedTodoList = currentTodoList.filter(
      (todo) => todo.id !== buttonId
    );
    setTodos(updatedTodoList);
    setNumOfTodos(updatedTodoList.length);
    localStorage.setItem("todos", JSON.stringify(updatedTodoList));
  };

  const onClickCheckBox = (todoId) => {
    const updatedTodoList = todos.map((todo) => {
      if (todo.id === todoId) {
        return { ...todo, isActive: !todo.isActive };
      }

      return todo;
    });
    setTodos(updatedTodoList);
    console.log(updatedTodoList);
    localStorage.setItem("todos", JSON.stringify(updatedTodoList));
  };

  const onClickAll = () => {
    setTodos(JSON.parse(localStorage.getItem("todos")) || []);
    setCurrentView("all");
  };

  const onClickActive = () => {
    const currentTodoList = JSON.parse(localStorage.getItem("todos")) || [];
    const updatedTodoList = currentTodoList.filter(
      (todo) => todo.isActive === true
    );
    setTodos(updatedTodoList);
    setCurrentView("active");
  };

  const onClickCompleted = () => {
    const currentTodoList = JSON.parse(localStorage.getItem("todos")) || [];
    const updatedTodoList = currentTodoList.filter(
      (todo) => todo.isActive !== true
    );
    setTodos(updatedTodoList);
    setCurrentView("completed");
  };

  const onClickClearCompleted = () => {
    const currentTodoList = JSON.parse(localStorage.getItem("todos")) || [];
    const updatedTodoList = currentTodoList.filter(
      (todo) => todo.isActive === true
    );
    setTodos(updatedTodoList);
    setNumOfTodos(updatedTodoList.length);
    localStorage.setItem("todos", JSON.stringify(updatedTodoList));
  };

  return (
    <>
      <Header
        addTodo={addTodo}
        onClickDarkModIcon={darkMode}
        onClickLightModIcon={lightMode}
        mode={theme}
      />
      <TodoList
        mode={theme}
        onClickAll={onClickAll}
        onClickActive={onClickActive}
        onClickCompleted={onClickCompleted}
        onClickClearCompleted={onClickClearCompleted}
        list={todos}
        removeTodo={removeTodo}
        onClickCheckBox={onClickCheckBox}
        numOfTodos={numOfTodos}
        currentView={currentView}
      />
    </>
  );
}

export default App;
