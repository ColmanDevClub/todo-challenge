import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ToDoForm } from './components/ToDoForm'
import { ToDo } from './components/ToDo'
import { ToDoWrap } from './components/ToDoWrap'


function App() {

  return <>
    <div>
      <ToDoWrap />
    </div>
  </>

}

export default App
