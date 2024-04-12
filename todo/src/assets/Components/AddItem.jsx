import { useState } from "react";

const AddItem = ({addTask}) => {

    const [newTask, setNewTask] = useState("");

    function handelInputChange(event) {
        setNewTask(event.target.value);
    }

    const handleClick = () => {
        addTask(newTask);
        setNewTask("");
    } 

    return (
        <div>
                <input
                    type="text"
                    placeholder="Enter a task"
                    value={newTask}
                    onChange={handelInputChange} />
                <button
                    className="add-button"
                    onClick={handleClick}>
                    Add
                </button>
            </div>

    )
}

export default AddItem