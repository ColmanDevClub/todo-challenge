import './List.css'
import Todo from './Todo'

export const List  =  ({todos,setTodo})=>{
   
    
    return <>
    <div className='todos'>
      {todos.map(todo => <Todo setTodo={setTodo} title={todo.title} id={todo.id} key={todo.id}/>)}
      </div>
    </>
}
export default List;