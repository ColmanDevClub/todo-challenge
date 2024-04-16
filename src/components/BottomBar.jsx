import './BottomBar.css'

const BottomBar = ({items , setTodos})=>{
    const handleClear = ()=>{
        setTodos(todos =>todos.filter(todo=> todo.isCompleted!== true))
    }
    //TODO :: Complete other btns

    
    return <>
        <div className="BottomBar">
        <div>{items} items left</div>
            <div>
                <button>All</button>
                <button>Active</button>
                <button>Completed</button>
            </div>
            <div>
                <button onClick={handleClear}>Clear Completed</button>
            </div>
        </div>
    </>
}
export default BottomBar;