import { v4 as uuidv4 } from 'uuid';
import { useState } from "react"
import { DarkTodo } from "../Todo/DarkTodo"
import './DarkTodoList.css'
import { DndProvider } from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";
import { getTodos, setTodosToLocalStorage } from '../../Services/localStorage';


export const DarkTodoList = () => {

    const [todos, setTodos] = useState(() => {
        return getTodos();
    });

    const handleKeyDown = (e, todos, setTodos) => {
        if(e.key === 'Enter' && e.target.value.trim() !== '') {
            const newTodo = {
                id: uuidv4(),
                text: e.target.value.trim(),
                completed: false,
            };
            setTodos([...todos, newTodo]);
            setTodosToLocalStorage([...todos, newTodo]);
            e.target.value = '';
        }
    }
    
    const handleCheckToggle = (id) => {
        const updatedTodos = todos.map((todo) =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        );
        setTodos(updatedTodos);
        setTodosToLocalStorage(updatedTodos);
    }

    let numOfItemsLeft = 0; 
    todos.forEach(todo => {
        if (todo && !todo.completed){
            numOfItemsLeft++;
        }
    });

    const handleClearCompleted = () => {
        setTodos(todos.filter(todo => !todo.completed));
        setTodosToLocalStorage(todos.filter(todo => !todo.completed));
    }

    const handleFilter = (option) => {
        let displayTodos = getTodos();
        switch(option) {
            case 'active':
                setTodos(displayTodos.filter(todo => !todo.completed));
                break;
            case 'completed':
                setTodos(displayTodos.filter(todo => todo.completed));
                break;
            default:
            setTodos(getTodos());
            break;
        }
    }

    const deleteTodo = (id) => {
        const updatedTodos = todos.filter(todo => todo.id !== id);
        setTodos(updatedTodos);
        setTodosToLocalStorage(updatedTodos);
    }

    const moveTodo = (dragIndex, hoverIndex) => {
        const updatedTodos = [...todos];
        const draggedTodo = updatedTodos[dragIndex];
    
        updatedTodos.splice(dragIndex, 1);
        updatedTodos.splice(hoverIndex, 0, draggedTodo);
    
        setTodos(updatedTodos);
        setTodosToLocalStorage(updatedTodos);
    };

    return <>
        <div className="singleTodo createToDo">
            <div className="checkCircle"></div>
            <input className="createToDoInput" placeholder={"Create a new todo..."} onKeyDown={(e) => handleKeyDown(e, todos, setTodos)} />
        </div>
        <DndProvider backend={HTML5Backend}>
        <div className="todoList">
            {todos.map((todo, index) => (<DarkTodo key={todo.id} todo={todo} handleCheckToggle={handleCheckToggle} deleteTodo={deleteTodo} index={index} moveTodo={moveTodo} />))}
        </div>
        </DndProvider>
        <div className="menu">
            <span className="numOfItemsLeft">{numOfItemsLeft} items left</span>
            <div className="filterOptions">
                <button onClick={() => handleFilter('all')}>All</button>
                &nbsp;
                <button onClick={() => handleFilter('active')}>Active</button>
                &nbsp;
                <button onClick={() => handleFilter('completed')}>Completed</button>
            </div>
            <button onClick={() => handleClearCompleted()}>Clear Completed</button>
        </div>
    </>
}