import React, { useState } from "react";
import myImage from "./bg-desktop-light.jpg";


export const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddTodo = () => {
    if (inputValue.trim() !== "") {
      setTodos([...todos, { text: inputValue, checked: false }]);
      setInputValue("");
    }
  };

  const handleCheckboxChange = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].checked = !updatedTodos[index].checked;
    setTodos(updatedTodos);
  };

  const handleDeleteTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  return (
    <>
    
    <div className="todo-container">
        
      <div className="list-container">
        <div className="list">
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Enter your todo..."
          />
          <button onClick={handleAddTodo}>Add</button>
          <div className="list-items">
            <ul>
              {todos.map((todo, index) => (
                <li
                  key={index}
                  style={{
                    textDecoration: todo.checked ? "line-through" : "none",
                  }}
                >
                  <input
                    className="delete-button"
                    type="checkbox"
                    checked={todo.checked}
                    onChange={() => handleCheckboxChange(index)}
                  />
                  {todo.text}
                  <button onClick={() => handleDeleteTodo(index)}>
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      
    </div>
    </>
  );
};
