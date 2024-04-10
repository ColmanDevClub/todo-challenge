import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import AddTodoForm from './components/AddTodoForm';
import './App.css';
import { TodoList } from './components/TodoList';
import FilterTodos from './components/FilterTodos';

const App = () => {
  const [todos, setTodos] = useState([
    {
      id: crypto.randomUUID(),
      text: 'Hi , I am your first todo',
      isCompleted: false,
    },
  ]);

  const [todosToShow, setTodosToShow] = useState([...todos]);

  const addTodo = (todo) => {
    const newTodos = [...todos, todo];
    setTodos(newTodos);
    setTodosToShow(newTodos);
  };

  const removeTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
    const newTodosToShow = todosToShow.filter((todo) => todo.id !== id);
    setTodosToShow(newTodosToShow);
  };

  const toggleTodoCompleted = (id) => {
    const todoIndex = todos.findIndex((todo) => todo.id === id);
    const newTodos = [...todos];
    newTodos[todoIndex].isCompleted = !newTodos[todoIndex].isCompleted;
    setTodos(newTodos);
  };

  return (
    <>
      <h1>Todo</h1>
      <AddTodoForm addTodo={addTodo} />
      <TodoList
        todosToShow={todosToShow}
        removeTodo={removeTodo}
        toggleTodoCompleted={toggleTodoCompleted}
      />
      <FilterTodos setTodosToShow={setTodosToShow} />
    </>
  );
};

export default App;
