import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import bgDesktopLight from '../../images/bg-desktop-light.jpg'
import bgDesktopDark from '../../images/bg-desktop-dark.jpg'
import Todo from './components/Todo'
import Moon from '../../images/icon-moon.svg'
import Sun from '../../images/icon-sun.svg'
import './App.css'

function App() {

  const [toggle, setToggle] = useState(false);
  const [newTodo, setNewTodo] = useState();
  const [todoList, setTodoList] = useState([]);

  const addTodo = () => {
    setTodoList([...todoList, newTodo]);
    setNewTodo('');
  };

  const toggleHandler = () => {
    setToggle((toggle) => !toggle)
    const root = document.documentElement;
    if (toggle) {
      root.style.setProperty('background-color', 'rgb(236, 236, 236)');
    }
    else {
      root.style.setProperty('background-color', 'rgb(26, 26, 26)');
    }

    const rootElements = document.querySelectorAll('.todo-input, .listContainer, .item , .addTodoButton');
    for (let i = 0; i < rootElements.length; i++) {
      if (!toggle) {
        rootElements[i].style.setProperty('background-color', 'rgb(62, 62, 65)');
        rootElements[i].style.setProperty('color', 'white');
      }
      else {
        rootElements[i].style.setProperty('background-color', 'white');
        rootElements[i].style.setProperty('color', 'rgb(63, 63, 63)')
      }
    }
  }

  const handleChangeInput = (e) => {
    setNewTodo(e.target.value);
  }

  const deleteItem = (index) => {
    const newList = [...todoList.slice(0, index), ...todoList.slice(index + 1)];
    setTodoList(newList);
  }

  return (
    <>
      <div className='Container' >
        <div className='TodoContainer'>
          <img className='bgDesktopLight' src={toggle ? bgDesktopDark : bgDesktopLight}></img>
          <div className='HeaderContainer'>
            <h1>T O D O </h1>
            <img onClick={toggleHandler} className='ColorModeBtn' src={toggle ? Sun : Moon} alt="" />
          </div>
          <div className='newInputContainer'>
            <input type="text" placeholder='Create a new todo...' className='todo-input' onChange={handleChangeInput} value={newTodo} />
            <button className='addTodoButton' onClick={addTodo}>+</button>
          </div>

          <Todo todoList={todoList} deleteItem={deleteItem}></Todo>
        </div>
      </div>

    </>
  )
}

export default App
