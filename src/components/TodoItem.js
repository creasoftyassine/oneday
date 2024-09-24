/** @jsxImportSource @emotion/react */
import { Link } from 'react-router-dom';
import Button from '../styles/containers/Button';
import H3 from '../styles/containers/H3';
import Card from '../styles/containers/Card';

const TodoItem = ({ todo, updateTodoStatus }) => {
    const handleToggleStatus = (event) => {
        //Block Propagation and Prevent the default behavior of the link.
        event.stopPropagation();
        event.preventDefault();

        updateTodoStatus({ variables: { id: todo.id, isDone: !todo.isDone } });
    };

    return (
        <Card as={Link} to={`/todo/${todo.id}`}>
            <div>
                <H3>{todo.title.length > 30 ? `${todo.title.substring(0, 30)}...` : todo.title}</H3>
                <p>Type: {todo.type}</p>
                <p>Date: {new Date(todo.createdAt).toLocaleDateString()}</p>
                <Button onClick={handleToggleStatus} type={todo.isDone ? 'valid' : 'alert'}>
                    {todo.isDone ? 'Mark as not done' : 'Mark as done'}
                </Button>
            </div>
        </Card>
    );
};

export default TodoItem;
