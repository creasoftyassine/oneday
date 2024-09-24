import { render, screen, fireEvent } from '@testing-library/react';
import TodoDetail from '../components/TodoDetail';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

// TODO fictif
const todo = {
    id: '1',
    createdAt: '2021-05-05T14:27:20.000Z',
    type: 'Tech',
    isDone: false,
    title: 'Test TODO 1',
    text: 'text1 text1 text1...',
};

test('should render TODO details and handle status toggle', () => {
    const updateTodoStatus = jest.fn();
    render(
        <MemoryRouter initialEntries={['/todos/1']}>
            <Routes>
                <Route path="/todos/:id" element={<TodoDetail todo={todo} updateTodoStatus={updateTodoStatus} />} />
            </Routes>
        </MemoryRouter>
    );

    // Check if TODO details are displayed.
    expect(screen.getByText('Test TODO 1')).toBeInTheDocument();
    expect(screen.getByText('Description: text1 text1 text1...')).toBeInTheDocument();
    expect(screen.getByText('Mark as done')).toBeInTheDocument();

    // Simulate a click on the button to change the status.
    fireEvent.click(screen.getByText('Mark as done'));

    // Check that the updateTodoStatus function is called with the correct variables
    expect(updateTodoStatus).toHaveBeenCalledWith({ variables: { id: '1', isDone: true } });
});
