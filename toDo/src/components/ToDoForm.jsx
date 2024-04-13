import react, { useState } from "react"

export const ToDoForm = ({ addToDo }) => {

    const [value, setValue] = useState("")
    const handleSubmit = e => {
        e.preventDefault();

        addToDo(value);
        setValue("")

    }

    return <>

        <form className="toDoForm" onSubmit={handleSubmit}>
            <input type="text" className="toDoInput" value={value} placeholder="insert task..." onChange={(e) => setValue(e.target.value)} />
            <button type="submit" className="btn" >Add Task</button>

        </form>
    </>
}