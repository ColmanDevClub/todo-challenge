import './DarkHome.css';
import { DarkTodoList } from "../TodoList/DarkTodoList"
import bgDesktopDark from "../../assets/images/bg-desktop-dark.jpg"

export const DarkHome = () => {

    return <>
        <img className="darkModeImg" src={bgDesktopDark} />
        <h1>TODO</h1>
        <div className='DarkHome'>
            <div className='toDoListAndCreate'>
                <DarkTodoList />
            </div>
            <span>Drag and drop to reorder list</span>
        </div>
    </>
}