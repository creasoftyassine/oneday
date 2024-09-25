import { useQuery, useMutation, gql } from '@apollo/client';
import { GET_TODOS } from './useTodos';

export const UPDATE_TODO_STATUS = gql`
  mutation UpdateTodoStatus($id: ID!, $isDone: Boolean!) {
    updateTodoStatusById(id: $id, isDone: $isDone) {
      id
      isDone
    }
  }
`;

export const GET_TODO_BY_ID = gql`
  query GetTodoById($id: ID!) {
    getTodoById(id: $id) {
      id
      title
      text
      type
      createdAt
      isDone
    }
  }
`;

// Custom hook to retrieve a todo by its ID
export const useGetTodo = (id) => {
  const { data, loading, error } = useQuery(GET_TODO_BY_ID, {
    variables: { id },
  });

  return {
    data,
    loading,
    error
  };
};

// Custom hook to update the status of a todo
export const useUpdateTodo = () => {
  const [updateTodoStatus] = useMutation(UPDATE_TODO_STATUS, {
    update: (cache, { data: { updateTodoStatusById } }) => {
      const myCache = cache.extract();
      const updatedItem = myCache[`Todo:${updateTodoStatusById.id}`];
      const allCachedQueries = myCache?.ROOT_QUERY || {};

      // Iterate through all cached queries
      Object.keys(allCachedQueries).forEach((key) => {
        const cacheEntry = allCachedQueries[key];
        // Check if the key is for a `getTodoList` query
        if (key.includes('getTodoList')) {
          const { filters } = JSON.parse(key.match(/\((.*)\)/)[1] || '{}');

          // Check if the current filters match the todo
          const matchesStatus = filters?.isDone === updatedItem.isDone || filters?.isDone === null;
          const matchesTypes = !filters?.types || filters.types.includes(updatedItem.type);

          // Retrieve the list of todos for this query
          const todoList = cacheEntry?.map(ref => myCache[ref.__ref]);

          // If the todo should be in this list
          if (matchesStatus && matchesTypes) {
            const isAlreadyInList = todoList.some(todo => todo.id === updatedItem.id);

            // If the todo is not already in the list, add it
            if (!isAlreadyInList) {
              cache.writeQuery({
                query: GET_TODOS,
                variables: { filters, orderBy: filters?.orderBy || 'DATE_DESC' },
                data: {
                  getTodoList: [...todoList, updatedItem],
                },
              });
            }
          } else if (filters.isDone !== null && filters.isDone !== undefined) {
            // If the todo should no longer be in this list, remove it
            const updatedTodoList = todoList.filter(todo => todo.id !== updatedItem.id);

            cache.writeQuery({
              query: GET_TODOS,
              variables: { filters, orderBy: filters?.orderBy || 'DATE_DESC' },
              data: {
                getTodoList: updatedTodoList,
              },
            });
          }
        }
      });
    }
  });

  return {
    updateTodoStatus,
  };
};
