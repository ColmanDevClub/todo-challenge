import React, { useState } from 'react'
import Todoitem from './Todoitem'
import checkIcon from '../../../images/icon-check.svg'
import crossIcon from '../../../images/icon-cross.svg'

const Todo = ({ todoList, deleteItem, isCompleted, setIsCompleted }) => {

    const [completed, setCompleted] = useState(false);
    const [completedArr, setCompletedArr] = useState([]);// Array of all the competed todos


    const completedHandler = (index) => {

        const newIsCompleted = [...isCompleted];
        newIsCompleted[index] = !newIsCompleted[index];
        setIsCompleted(newIsCompleted);

        if (newIsCompleted[index]) {
            const newCompletedlist = [...completedArr, todoList[index]]; // Array of all the competed todos
            setCompletedArr(newCompletedlist);
            console.log(newCompletedlist);
        }
        else {
            const newCompletedlist = [...completedArr.slice(0, index), ...completedArr.slice(index + 1)];
            setCompletedArr(newCompletedlist);
            console.log(newCompletedlist);
        }

        const rootCheck = document.getElementsByClassName('checkButton');
        const rootElements = document.getElementsByClassName('item');

        for (let i = 0; i < rootElements.length; i++) {
            if (i === index) {
                if (newIsCompleted[index]) {
                    rootElements[i].style.setProperty('text-decoration', 'line-through black');
                    rootCheck[i].style.setProperty('background', 'linear-gradient(to right,rgb(211, 134, 255),rgb(134, 156, 255))');
                } else {
                    rootElements[i].style.setProperty('text-decoration', 'none');
                    rootCheck[i].style.setProperty('background', 'rgb(218, 218, 218)');
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