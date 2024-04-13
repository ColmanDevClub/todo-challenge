export const ToDo = ({ task, onDelete, onToggle }) => {
    return (
        <div className="Todo">
            <img src="images/icon-check.svg" className={task.completed ? "checkbox-checked" : "checkbox"} type="checkbox"
                onClick={onToggle} />
            <p className={task.completed ? "pTasks_completed" : "pTasks"}> {task.task} </p>
            <img className="dltBtn" src="images/trash-icon.png" alt="delete" onClick={onDelete} />
        </div>
    );
};
