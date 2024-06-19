import PropTypes from 'prop-types';
import Todo from './Todo';
import { Container } from 'react-bootstrap';

export const TodoList = ({ todosToShow, removeTodo, toggleTodoCompleted }) => {
  return (
    <>
      <Container id="todo-list">
        {todosToShow.map((todo, index) => (
          <Todo
            key={index}
            todo={todo}
            removeTodo={removeTodo}
            toggleTodoCompleted={toggleTodoCompleted}
          />
        ))}
      </Container>
    </>
  );
};

TodoList.propTypes = {
  todosToShow: PropTypes.array.isRequired,
  removeTodo: PropTypes.func.isRequired,
  toggleTodoCompleted: PropTypes.func.isRequired,
};
