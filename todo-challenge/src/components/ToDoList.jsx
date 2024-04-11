import React, { useState } from "react";

export const ToDoList = ({ addTask }) => {
    const [task, setTask] = useState('');

    const handleInputValue = (event) => {
        setTask(event.target.value);
    };

    const handleAddTask = (event) => {
        event.preventDefault(); 
        if (task.trim() === '') return;
        addTask(task);
        setTask('');
    };

    return (
        <form className="to-do-list" onSubmit={handleAddTask}>
            <input
                type="text"
                name="task"
                value={task}
                placeholder="Create a new todo..."
                onChange={handleInputValue}
            />
            <button type="submit">+</button> {/* Corrected the button type */}
        </form>
    );
};
