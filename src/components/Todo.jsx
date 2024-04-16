import './Todo.css'
export const Todo = ({title,id,setTodo})=>{
     const handleRemove = ()=>{
         setTodo((todos) => {
          return todos.filter(todo=> todo.id!== id)})
     }
     const handleCheck = ()=>{
          setTodo((todos)=>{
               const newTodos = [...todos]
               const todo = newTodos.find(todo=>todo.id===id)
               todo.isCompleted = !todo.isCompleted
               return newTodos
          })
     }

return <><div className="todo-element">
     <div className="round">
    <input type="checkbox"  id="checkbox" onChange={handleCheck}/>
    {/* <label htmlFor="checkbox"></label> */}
  </div>
     <div className='title'>{title}</div>
     <button onClick={handleRemove}>Remove task</button>
</div>
</>

}
export default Todo;