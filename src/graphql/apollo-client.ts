import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';

// this makes graphql endpoint to send http request
const httpLink = new HttpLink({
  uri: 'http://localhost:4000/graphql',
  credentials: "include",
});

export const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
  // Apollo has built in cache
});