import { render } from '@testing-library/react';
import { ApolloProvider } from '@apollo/client';
import { TodoProvider } from '../context/TodoContext';
import client from '../apollo/client';
import App from '../App';

test('renders learn react link', () => {
  render(
    <ApolloProvider client={client}>
      <TodoProvider>
        <App />
      </TodoProvider>
    </ApolloProvider>
  );
});
