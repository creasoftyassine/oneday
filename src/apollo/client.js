import { ApolloClient, InMemoryCache } from '@apollo/client';
const uri = process.env.REACT_APP_API_URL;
const client = new ApolloClient({
    uri,
    cache: new InMemoryCache(),
});

export default client;
