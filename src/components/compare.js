/** @jsxImportSource @emotion/react */
import Button from '../styles/containers/Button';
import { useNavigate } from 'react-router-dom';
import TodoContainer from '../styles/containers/TodoContainer';
import { css } from '@emotion/react';

const TodoDetail = ({ todo, updateTodoStatus }) => {
    const navigate = useNavigate();

    if (!todo) {
        return <p>No TODO found.</p>;
    }

    const handleToggleStatus = () => {
        updateTodoStatus({ variables: { id: todo.id, isDone: !todo.isDone } });
    };

    const handleGoBack = () => {
        navigate('/');
    };

    const buttonContainerStyle = css`
        display: flex;
        justify-content: space-between;
        margin-top: 20px;
    `;

    return (
        <TodoContainer>
            <h2>{todo.title}</h2>
            <p>Type: {todo.type}</p>
            <p>Date: {new Date(todo.createdAt).toLocaleDateString()}</p>
            <p>Description: {todo.text || 'No description provided.'}</p>
            <div css={buttonContainerStyle}>
                <Button onClick={handleToggleStatus} type={todo.isDone ? 'valid' : 'alert'}>
                    {todo.isDone ? 'Mark as not done' : 'Mark as done'}
                </Button>
                <Button onClick={handleGoBack} type="primary">
                    Retour
                </Button>
            </div>
        </TodoContainer>
    );
};

export default TodoDetail;
