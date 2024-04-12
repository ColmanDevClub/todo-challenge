import React, { useState } from "react";
import ToDoItem from "./toDoItem"
import AddItem from "./AddItem";


function ToDoList() {
    const [tasks, setTasks] = useState([]);
    const [selectedOption, setSelectedOption] = useState("All");


    function addTask(taskText) {
        if (taskText.trim() !== "") {
            setTasks(t => [...t, { text: taskText, completed: false }]);
        }
    }

    function deleteTask(index) {
        const updateTasks = tasks.filter((_, i) => i !== index);
        setTasks(updateTasks);
    }

    function toggleTask(taskText) {
        const updatedTasks = tasks.map(task =>
            task.text === taskText ? { ...task, completed: !task.completed } : task
        );
        setTasks(updatedTasks);
    }

    function deleteCompletedTasks() {
        const updatedTasks = tasks.filter(task => !task.completed);
        setTasks(updatedTasks);
    }


    function moveTaskUp(index) {
        if (index > 0) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    function moveTaskDown(index) {
        if (index < tasks.length - 1) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    function handleOptionClick(option) {
        setSelectedOption(option);
    }

    const filteredTasks = selectedOption === "All" ? tasks :
        selectedOption === "Active" ? tasks.filter(task => !task.completed) :
            selectedOption === "Completed" ? tasks.filter(task => task.completed) :
                [];

    return (
        <div className="to-do-list">
            <h1>TODO <img className="icon-mode" src="../public/images/icon-moon.svg" alt="Mode Icon" /> </h1>

            <AddItem addTask={addTask} />


            <ol>
                {filteredTasks.map((task, index) => (
                    <ToDoItem
                        key={`${task.text}-${task.completed}`}  // Use a unique key
                        index={index}
                        task={task.text}
                        completed={task.completed}
                        onDeleteTask={() => deleteTask(index)}
                        onMoveTaskUp={() => moveTaskUp(index)}
                        onMoveTaskDown={() => moveTaskDown(index)}
                        onToggleTask={() => toggleTask(task.text)}
                    />
                ))}
            </ol>


            <div className="info-container">


                <h2>{filteredTasks.length} items left</h2>
                <p className={`option ${selectedOption === "All" && "selected"}`} onClick={() => handleOptionClick("All")}>All </p>
                <p className={`option ${selectedOption === "Active" && "selected"}`} onClick={() => handleOptionClick("Active")}>Active </p>
                <p className={`option ${selectedOption === "Completed" && "selected"}`} onClick={() => handleOptionClick("Completed")}>Completed </p>
                <button className="delete-button" onClick={deleteCompletedTasks}>Clear Completed</button>


            </div>


        </div>);
}




export default ToDoList