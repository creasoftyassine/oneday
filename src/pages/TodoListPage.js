/** @jsxImportSource @emotion/react */
import { useTodos } from '../hooks/useTodos';
import TodoList from '../components/TodoList';
import Filters from '../components/Filters';
import { useTodoContext } from '../context/TodoContext';
import { useUpdateTodo } from '../hooks/useTodo';
import { Header } from '../styles/containers/Header';
import { Container } from '../styles/containers/Container';

const TodoListPage = () => {
    const { filters } = useTodoContext();
    const { todos, loading, error } = useTodos(filters);
    const { updateTodoStatus } = useUpdateTodo();

    const renderLoading = () => <p>Loading...</p>;

    const renderError = () => <p>Error: {error.message}</p>;

    const renderContent = () => (
        <Container>
            <TodoList todos={todos} updateTodoStatus={updateTodoStatus} />
        </Container>
    );

    return (
        <>
            <Header>
                <h1>TODO List</h1>
                <Filters />
            </Header>
            {loading ? renderLoading() : error ? renderError() : renderContent()}
        </>
    );
};

export default TodoListPage;
