import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import AddTodoForm from './components/AddTodoForm';
import './App.css';
import { TodoList } from './components/TodoList';
import FilterTodos from './components/FilterTodos';

const App = () => {
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem('ITEMS');
    if (localValue == null)
      return [
        {
          id: crypto.randomUUID(),
          text: 'Hi , I am your first todo',
          isCompleted: false,
        },
      ];

    return JSON.parse(localValue);
  });
  useEffect(() => {
    localStorage.setItem('ITEMS', JSON.stringify(todos));
  }, [todos]);
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
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, isCompleted: !todo.isCompleted };
      }
      return todo;
    });
    setTodos(newTodos);
    setTodosToShow(newTodos);
  };

  const filterTodosByStatus = (status) => {
    if (status === 'all') {
      setTodosToShow(todos);
    } else if (status === 'completed') {
      const newTodosToShow = todos.filter((todo) => todo.isCompleted);
      setTodosToShow(newTodosToShow);
    } else if (status === 'active') {
      const newTodosToShow = todos.filter((todo) => !todo.isCompleted);
      setTodosToShow(newTodosToShow);
    }
  };

  const clearCompletedTodos = () => {
    const newTodos = todos.filter((todo) => !todo.isCompleted);
    setTodos(newTodos);
    setTodosToShow(newTodos);
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
      <FilterTodos
        filterTodosByStatus={filterTodosByStatus}
        clearCompletedTodos={clearCompletedTodos}
      />
    </>
  );
};

export default App;
