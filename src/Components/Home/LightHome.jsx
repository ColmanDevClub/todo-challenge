import './LightHome.css';
import { LightTodoList } from "../TodoList/LightTodoList"
import bgDesktopLight from "../../assets/images/bg-desktop-light.jpg"
export const LightHome = () => {

    return <>
        <img className="lightModeImg" src={bgDesktopLight} />
        <h1>TODO</h1>
        <div className='LightHome'>
            <div className='toDoListAndCreate'>
                <LightTodoList />
            </div>
            <span>Drag and drop to reorder list</span>
        </div>
    </>
}