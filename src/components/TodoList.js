/** @jsxImportSource @emotion/react */
import TodoItem from './TodoItem';
import CardList from '../styles/containers/CardList';

const TodoList = ({ todos, updateTodoStatus }) => {
    return (
        <CardList>
            {todos.length > 0 ? (
                todos.map((todo) => (
                    <TodoItem key={todo.id} todo={todo} updateTodoStatus={updateTodoStatus} />
                ))
            ) : (
                <p>No TODOs available.</p>
            )}
        </CardList>
    );
};

export default TodoList;
