import React from 'react'

function Todoitem({ newTodo, completed, onClick }) {
    return (
        <p className='item'> {newTodo}</p >
    )
}

export default Todoitem