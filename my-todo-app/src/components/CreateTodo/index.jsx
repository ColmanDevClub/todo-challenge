import "./style.css";
import { useState } from "react";

const SearchInput = ({ addTodo, mode }) => {
  const [inputValue, setInputValue] = useState("");

  const sendTodo = () => {
    const todoId = new Date().getTime();
    const newTodo = {
      id: todoId,
      value: inputValue,
      isActive: true,
    };

    if (newTodo.value) {
      addTodo(newTodo);
      setInputValue("");
    }
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  return (
    <>
      <section className="search-content">
        <button onClick={sendTodo} className="send-button">
          Add
        </button>
        <input
          className={`search-input ${mode}`}
          id="searchInput"
          type="text"
          placeholder="create a new todo..."
          value={inputValue}
          onChange={handleInputChange}
        ></input>
      </section>
    </>
  );
};

export default SearchInput;
