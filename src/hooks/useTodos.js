import { useQuery, gql } from '@apollo/client';

export const GET_TODOS = gql`
  query GetTodoList($filters: TodoFiltersInput, $orderBy: Ordering) {
    getTodoList(filters: $filters, orderBy: $orderBy) {
      id
      createdAt
      type
      isDone
      title
    }
  }
`;
// If there are no filters to apply, do not send "filters" at all

export const useTodos = (filters) => {
  // Separate orderBy from other filters
  const { orderBy, types, isDone } = filters;

  // Create a new object for filters to send
  let appliedFilters = {};

  // If isDone is non-null, add it to filters
  appliedFilters = (types && types.length > 0) ?
    { ...appliedFilters, types } :
    appliedFilters;


  // If types is non-empty,  it to filters
  appliedFilters = (isDone !== null) ?
    { ...appliedFilters, isDone } :
    appliedFilters;



  // If isDone is non-null, add it to filters
  const variables = {
    filters: appliedFilters,
    orderBy,
  };
  const { data, loading, error, refetch } = useQuery(GET_TODOS, {
    variables,
  });


  return {
    todos: data?.getTodoList || [],
    loading,
    error,
    refetch,
  };
};
