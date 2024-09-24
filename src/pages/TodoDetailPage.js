import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetTodo, useUpdateTodo } from '../hooks/useTodo';
import TodoDetail from '../components/TodoDetail';

const TodoDetailPage = () => {
  const { id } = useParams();
  const { data, loading, error } = useGetTodo(id);
  const { updateTodoStatus } = useUpdateTodo();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const todo = data.getTodoById;


  return <TodoDetail todo={todo} updateTodoStatus={updateTodoStatus} />
};

export default TodoDetailPage;
