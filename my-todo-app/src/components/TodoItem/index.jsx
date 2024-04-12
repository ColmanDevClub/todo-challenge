import crossIcon from "../../assets/images/icon-cross.svg";
import Checkbox from "../Checkbox";
import "./style.css";

const TodoItem = ({ text, id, removeTodo, onClickCheckBox, todo, mode }) => {
  const removeItem = () => {
    removeTodo(id);
  };
  const checkBoxClicted = () => {
    onClickCheckBox(id);
  };

  const todoTextClassName = !todo.isActive
    ? "todo-completed-text"
    : "todo-active-text ";
  const checkBoxClassName = !todo.isActive
    ? "check-box-completed"
    : "check-box-active";
  return (
    <>
      <section className="todo-item" id="todoItem">
        <div className="content">
          <Checkbox
            onClick={checkBoxClicted}
            className={checkBoxClassName}
            mode={mode}
          />
          <p className={`${todoTextClassName} ${mode}`} id="todoText">
            {text}
          </p>
        </div>
        <img
          value={todo}
          onClick={removeItem}
          className={`cross-icon ${mode}`}
          src={crossIcon}
        />
      </section>
    </>
  );
};

export default TodoItem;
