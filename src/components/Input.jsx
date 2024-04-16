export const Input = ({setNewTodo,todos})=>{

    return<>
    <input onKeyDown={(e) =>{ 
    if(e.key=='Enter'&& e.target.value !=''){
        // todos.list.push(e.target.value)
        setNewTodo([...todos, {id: todos.length+1, title : e.target.value , isCompleted : false}])
        e.target.value=''
    }}

} className='text-input'  placeholder="Create a new TODO..."></input>
        </>
}
export default Input;