import React, { useState } from 'react'
import Todoitem from './Todoitem'
import checkIcon from '../../../images/icon-check.svg'

const Todo = ({ todoList }) => {

    const [completed, setCompleted] = useState(true);

    const completedHandler = (index) => {
        console.log(todoList);
        setCompleted((completed) => !completed)
        const rootElements = document.getElementsByClassName('item');
        for (let i = 0; i < rootElements.length; i++) {
            if (i === index) {
                if (completed) {
                    rootElements[i].style.setProperty('text-decoration', 'line-through black');
                } else {
                    rootElements[i].style.setProperty('text-decoration', 'none');
                }
            }
        }

    }

    return (
        <div className='listContainer'>

            {todoList.map((todo, index) => (
                <div key={index} className='todoItemContainer'>
                    <img src={checkIcon} className='checkButton' onClick={() => completedHandler(index)} />
                    <Todoitem newTodo={todo} />
                </div>

            ))}
        </div>
    )
}

export default Todo