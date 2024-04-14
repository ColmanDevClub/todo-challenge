import React, { useState } from 'react'
import Todoitem from './Todoitem'
import checkIcon from '../../../images/icon-check.svg'
import crossIcon from '../../../images/icon-cross.svg'

const Todo = ({ todoList , deleteItem}) => {

    const [completed, setCompleted] = useState(true);

    const completedHandler = (index) => {
        console.log(todoList);
        setCompleted((completed) => !completed)
        const rootCheck = document.getElementsByClassName('checkButton');
        const rootElements = document.getElementsByClassName('item');
        for (let i = 0; i < rootElements.length; i++) {
            if (i === index) {
                if (completed) {
                    rootElements[i].style.setProperty('text-decoration', 'line-through black');
                    rootCheck[i].style.setProperty('background-color', 'black');
                } else {
                    rootElements[i].style.setProperty('text-decoration', 'none');
                    rootCheck[i].style.setProperty('background-color', 'white');
                }
            }
        }
    }

    const deleteHandler = (index) => {
        deleteItem(index);
    }

    return (
        <div className='listContainer'>

            {todoList.map((todo, index) => (
                <div className='todoItemBigContainer'>
                    <div key={index} className='todoItemContainer'>
                        <img src={checkIcon} className='checkButton' onClick={() => completedHandler(index)} />
                        <Todoitem newTodo={todo} />
                    </div>
                    <img src={crossIcon} className='crossButton' onClick={() => deleteHandler(index)} />
                </div>

            ))}
        </div>
    )
}

export default Todo