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

  const toggleHandler = () => {
    setToggle((toggle) => !toggle)
    // Get reference to the :root element
    const root = document.documentElement;

    if (toggle) {
      root.style.setProperty('background-color', '#dadada');
    }
    else {
      root.style.setProperty('background-color', 'black');
    }
  }

  return (
    <>
      <div className='Container' >
        <img className='bgDesktopLight' src={toggle ? bgDesktopDark : bgDesktopLight}></img>
        <div className='TodoContainer'>
          <div className='HeaderContainer'>
            <h1>TODO</h1>
            <img onClick={toggleHandler} className='ColorModeBtn' src={toggle ? Sun : Moon} alt="" />
          </div>
          <input type="text" placeholder='Create a new todo...' />
          <Todo></Todo>
        </div>
      </div>

    </>
  )
}

export default App
