import { useState } from 'react'
import './App.css'


function App() {

  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const handleInputChange = (e) => {
    setNewTodo(e.target.value);
  };

  const handleAddTodo = () => {
    if (newTodo.trim() !== '') {
      setTodos([...todos, { id: Date.now(), text: newTodo, completed: false }]);
      setNewTodo('');
    }
  };

  const handleRemoveTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleRenameTodo = (id, newText) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, text: newText } : todo
      )
    );
  };

  const handleToggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleDragStart = (e, id) => {
    e.dataTransfer.setData('text/plain', id.toString());
  };

  const handleDrop = (e) => {
    const droppedId = parseInt(e.dataTransfer.getData('text/plain'));
    const draggedId = parseInt(e.target.dataset.id);

    const newOrder = todos.map((todo) => {
      if (todo.id === droppedId) return { ...todo, id: draggedId };
      if (todo.id === draggedId) return { ...todo, id: droppedId };
      return todo;
    });

    setTodos(newOrder);
  };

  return (
    <div className="App">
      <h1>TODO</h1>
      
      <input
        type="text"
        value={newTodo}
        onChange={handleInputChange}
        placeholder="Add a new todo..."
      />

      <button onClick={handleAddTodo}>Add</button>
      
      <ul>
        {todos.map((todo) => (
          
          <li
            key={todo.id}
            data-id={todo.id}
            draggable="true"
            onDragStart={(e) => handleDragStart(e, todo.id)}
            onDragOver={(e) => e.preventDefault()}
            onDrop={handleDrop}
            className={todo.completed ? 'completed' : ''}
          >
            
            <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>{todo.text}</span>
            
            <button onClick={() => handleRemoveTodo(todo.id)}>Remove</button>
            
            <input
              type="text"
              defaultValue={todo.text}
              onBlur={(e) => handleRenameTodo(todo.id, e.target.value)}
            />
            
            <button onClick={() => handleToggleComplete(todo.id)}>
              {todo.completed ? 'Mark Incomplete' : 'Mark Complete'}
            </button>

          </li>
        ))}
      </ul>
    
    
    </div>
  );
}

export default App;