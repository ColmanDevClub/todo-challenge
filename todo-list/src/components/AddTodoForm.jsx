import Form from 'react-bootstrap/Form';
import PropTypes from 'prop-types';
import { Container } from 'react-bootstrap';

const AddTodoForm = ({ addTodo }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const todoText = e.target.elements[0].value;
    if (!todoText) return;
    const todo = {
      id: crypto.randomUUID(),
      text: todoText,
      isCompleted: false,
    };
    addTodo(todo);
    e.target.reset();
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit} className="d-flex">
        <Form.Group className="form-group">
          <Form.Control type="text" placeholder="Add a todo" />
        </Form.Group>
      </Form>
    </Container>
  );
};

AddTodoForm.propTypes = {
  addTodo: PropTypes.func.isRequired,
};

export default AddTodoForm;
