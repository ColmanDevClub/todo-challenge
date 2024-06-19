import CloseButton from 'react-bootstrap/CloseButton';
import PropTypes from 'prop-types';
import FormCheckInput from 'react-bootstrap/esm/FormCheckInput';
const Todo = ({ todo, removeTodo, toggleTodoCompleted }) => {
  const handleRemoveClick = () => {
    removeTodo(todo.id);
  };
  const handleCheckboxChange = (e) => {
    const parantDiv = e.target.parentElement;
    parantDiv.classList.toggle('completed');
    toggleTodoCompleted(todo.id);
  };
  const todoItemStyle = {
    textDecoration: todo.isCompleted ? 'line-through' : 'none',
    color: todo.isCompleted ? 'gray' : 'inherit',
  };
  return (
    <div
      className="d-flex justify-content-between todo-item"
      style={todoItemStyle}
    >
      <FormCheckInput
        type="checkbox"
        checked={todo.isCompleted}
        onChange={handleCheckboxChange}
      />
      <p>{todo.text}</p>
      <div>
        <CloseButton onClick={handleRemoveClick} />
      </div>
    </div>
  );
};
Todo.propTypes = {
  todo: PropTypes.object.isRequired,
  removeTodo: PropTypes.func.isRequired,
  toggleTodoCompleted: PropTypes.func.isRequired,
};
export default Todo;
