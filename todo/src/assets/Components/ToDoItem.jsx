const ToDoItem = ({ task, completed, onDeleteTask, onMoveTaskUp, onMoveTaskDown, onToggleTask }) => {
    return (
        <li>
            <input 
                type="checkbox" 
                checked={completed}  // Set the checked attribute based on the completed prop
                onChange={onToggleTask}  // Use the onToggleTask function to toggle completion
            />
            <span className="text">{task}</span>
            <button className="delete-button" onClick={onDeleteTask}>Delete</button>
            <button className="move-button" onClick={onMoveTaskUp}>Up</button>
            <button className="move-button" onClick={onMoveTaskDown}>Down</button>
        </li>
    );
};


export default ToDoItem