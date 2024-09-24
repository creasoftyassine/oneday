import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import TodoList from '../components/TodoList'; // Composant de liste TODO
import { GET_TODOS } from '../hooks/useTodos'; // Requête GraphQL
import { TodoProvider } from '../context/TodoContext';
import { UPDATE_TODO_STATUS } from '../hooks/useTodo';
import { MemoryRouter } from 'react-router-dom';

// Mocks GraphQL pour tester les requêtes/mutations
const mocks = [
    {
        request: {
            query: GET_TODOS,
            variables: { filters: {}, orderBy: 'DATE_DESC' },
        },
        result: {
            data: {
                getTodoList: [
                    {
                        id: "1",
                        createdAt: "2021-05-05T14:27:20.000Z",
                        type: "Tech",
                        isDone: false,
                        title: "Test TODO 1",
                        text: "text1 text1 text1...",
                    },
                    {
                        id: "2",
                        createdAt: "2021-05-04T14:27:20.000Z",
                        type: "RH",
                        isDone: true,
                        title: "Test TODO 2",
                        text: "text2 text2 text2...",
                    }
                ]
            },
        },
    },
    {
        request: {
            query: UPDATE_TODO_STATUS,
            variables: { id: '1', isDone: true },
        },
        result: {
            data: {
                updateTodoStatusById: {
                    id: "1",
                    isDone: true
                }
            },
        },
    },
];

test('should update TODO status', async () => {
    const todos = [
        {
            id: "1",
            createdAt: "2021-05-05T14:27:20.000Z",
            type: "Tech",
            isDone: false,
            title: "Test TODO 1",
            text: "text1 text1 text1...",
        },
        {
            id: "2",
            createdAt: "2021-05-04T14:27:20.000Z",
            type: "RH",
            isDone: true,
            title: "Test TODO 2",
            text: "text2 text2 text2...",
        },
    ];

    const updateTodoStatus = jest.fn();

    render(
        <MemoryRouter>
            <MockedProvider mocks={mocks} addTypename={false}>
                <TodoProvider>
                    <TodoList todos={todos} updateTodoStatus={updateTodoStatus} />
                </TodoProvider>
            </MockedProvider>
        </MemoryRouter>
    );

    // Check that the TODOS are correctly rendered.
    expect(screen.getByText('Test TODO 1')).toBeInTheDocument();
    expect(screen.getByText('Test TODO 2')).toBeInTheDocument();

    // Simulate a click on the "Mark as done" button.
    fireEvent.click(screen.getByText('Mark as done'));

    // Wait for the text to be updated after the mutation.
    await waitFor(() => {
        const updatedTodo = screen.getByText('Mark as not done');
        expect(updatedTodo).toBeInTheDocument();
    });
});

