import './App.css'
import List from './components/List'
import TopBar from './components/TopBar'
import Input from './components/Input'
import BottomBar from './components/BottomBar'
import { useState } from "react";
function App() {
  const [todos,setTodos] = useState([{id : 1 , title : "Test" , isCompleted : false}]);

  return <>
  <div className='app'>
    <TopBar />
    <Input setNewTodo={setTodos} todos={todos}/>
    <List todos={todos} setTodo={setTodos}></List>
    <BottomBar items={todos.length} setTodos={setTodos} />
  </div>
    </>
  
}

export default App
