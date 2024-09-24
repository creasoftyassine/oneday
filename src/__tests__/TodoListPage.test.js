import { render } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import TodoListPage from '../pages/TodoListPage';
import { GET_TODOS } from '../hooks/useTodos';
import { TodoProvider } from '../context/TodoContext';

const mocks = [
    {
        request: {
            query: GET_TODOS,
            variables: { filters: {}, orderBy: 'DATE_DESC' },
        },
        result: {
            data: {
                "getTodoList": [
                    {
                        "id": "1",
                        "createdAt": "2021-05-05T14:27:20.000Z",
                        "type": "Tech",
                        "isDone": true,
                        "title": "Title 1",
                        "text": "text1 text1 text1...",
                    },
                    {
                        "id": "2",
                        "createdAt": "2021-05-04T14:27:20.000Z",
                        "type": "RH",
                        "isDone": false,
                        "title": "title 2",
                        "text": "text2 text2 text2...",
                    }
                ]
            },
        },
    },
];

test('renders TodoListPage', () => {
    render(
        <MockedProvider mocks={mocks} addTypename={false}>
            <TodoProvider>
                <TodoListPage />
            </TodoProvider>
        </MockedProvider>
    );
});
