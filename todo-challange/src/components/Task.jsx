import { COMPLETED } from "../mock";

const Task = ({  id ,description, active, removeTask, toggleComplete }) => (
  <div className={!active?"Completed":undefined}>
    <span>
      <button onClick={()=>toggleComplete(id)}>&#11093;</button>
    </span>
    <span>{description}</span>;
    <span>
      <button onClick={()=>removeTask(id)}>&#10060;</button>
    </span>
  </div>
);

export default Task;
