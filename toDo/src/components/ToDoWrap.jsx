import { useState } from "react"
import { ToDo } from "./ToDo"
import { ToDoForm } from "./ToDoForm"

export const ToDoWrap = () => {
    const [todos, setTodos] = useState([])
    const [showUncomplete, setShowUncomplete] = useState(false);
    const [theme, setTheme] = useState('light');


    const addToDo = todo => {
        setTodos([...todos, { task: todo, completed: false }])

    }


    const deleteTask = (indexToDelete) => {
        setTodos(prevTodos => prevTodos.filter((_, index) => index !== indexToDelete));
    }

    const toggleTaskCompletion = indexToToggle => {
        setTodos(prevTodos => prevTodos.map((todo, index) =>
            index === indexToToggle ? { ...todo, completed: !todo.completed } : todo))

    }

    const deleteAllTasks = () => {
        setTodos([])
    }

    const deleteCompleted = () => {
        setTodos(prevTodos => prevTodos.filter(todo => !todo.completed));
    }

    const changeTheme = () => {
        setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
    }

    return <>
        <div className="ToDoWrap">
            <div className="header">
                <h1>TODO</h1>
                <img onClick={changeTheme} className="sun-icon" src={`images/icon-${theme === 'light' ? 'sun' : 'moon'}.svg`} alt="Toggle theme" />
            </div>

            <ToDoForm addToDo={addToDo} />
            {todos.map((todo, index) => ((!showUncomplete || !todo.completed) &&
                <ToDo task={todo} key={index} onDelete={() => deleteTask(index)}
                    onToggle={() => toggleTaskCompletion(index)} />
            ))}
        </div>

        <button className="btn" onClick={deleteAllTasks}>Delete All</button>
        <button className="btn" onClick={() => setShowUncomplete(!showUncomplete)}> {showUncomplete ? 'ShowAllTasks' : 'showUncomplete'}  </button>
        <button className="btn" onClick={deleteCompleted}>Clear Checked Tasks</button>


    </>
}
