import { ACTIVE, COMPLETED, ALL, tasks } from "../mock";
import { useState, useEffect } from "react";
import Task from "./Task";
import AddTask from "./Addtask";
import Navbar from './Navbar';
const Main = () => {
  const [tasksList, setTasksList] = useState([]);
  const [filteredTasksList,setFilteredTasksList] = useState([]);
  const [selected, setSelected] = useState(ALL);

  useEffect(() => setTasksList(tasks), []);
  const addTask = (description) =>
    setTasksList((oldList) =>
      oldList.concat([{ id: oldList.length + 1, description, active: true }])
    );
  const removeTask = (id) =>
    setTasksList((oldList) => oldList.filter((list) => list.id != id));
  const toggleActive = (id) =>
    setTasksList((oldList) => {
      const alteredList = [...oldList];
      alteredList[id - 1].active = !alteredList[id - 1].active;
      return alteredList;
    });
  const clearTasks = () => setTasksList(oldTask => oldTask.filter(task=>task.active));
  const alterSelected = (newSelect) => setSelected((oldSelect) => newSelect);
  useEffect(() => 
  setFilteredTasksList((oldList) => tasksList.filter(task=>{
    switch (selected) {
      case ACTIVE:
        return task.active;
      case COMPLETED:
        return !task.active;
      default:
        return true;
    }
  })),
   [tasksList,selected]);
  return (
    <div className="main">
      <h1>TODO</h1>
      <div>
        <AddTask addTaskHandler={addTask} />
      </div>
      <div className="taskList">
        {filteredTasksList.map(({ id, description, active }) => (
          <Task
            key={id}
            id={id}
            removeTask={removeTask}
            description={description}
            active={active}
            toggleComplete={toggleActive}
          />
        ))}
      </div>
      <div>
        <Navbar filterHandler={alterSelected} clearHandler={clearTasks} counter={tasksList.length}/>
      </div>
    </div>
  );
};
export default Main;
