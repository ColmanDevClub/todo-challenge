import './LightTodo.css';
import { v4 as uuidv4 } from 'uuid';
import React, {useRef} from 'react';
import { useDrag, useDrop } from "react-dnd";

const type = "Todo";

export const LightTodo = ({todo, handleCheckToggle, deleteTodo, index, moveTodo}) => {

    const ref = useRef(null);

    const [, drop] = useDrop({
        accept: type,
        hover(item) {
            if (!ref.current) {
                return;
            }
            const dragIndex = item.index;
            const hoverIndex = index;
            if (dragIndex === hoverIndex) {
                return;
            }
            moveTodo(dragIndex, hoverIndex);
            item.index = hoverIndex;
        },
    });

    const [{ isDragging }, drag] = useDrag(() => ({
        type: type,
        item: { type, id: uuidv4(), index}, 
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    }));

    drag(drop(ref));
      
    return <>
        <div className={`singleTodoLight ${todo.completed ? 'completed' : '' }`} ref={ref} style={{ opacity: isDragging ? 0 : 1 }}>
            <button className="checkCircleLight" onClick={() => handleCheckToggle(todo.id)}>
                <svg className='check' xmlns="http://www.w3.org/2000/svg" width="11" height="9"><path fill="none" stroke="#FFF" strokeWidth="2" d="M1 4.304L3.696 7l6-6"/></svg>
            </button>
            <span className='lightSpan'>{todo.text}</span>
            <button className="deleteTodo" onClick={() => deleteTodo(todo.id)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"><path fill="#494C6B" fillRule="evenodd" d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"/></svg>
            </button>
        </div>
        <hr/>
    </>
}