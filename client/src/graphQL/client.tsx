import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import { onError } from "apollo-link-error";
import { setContext } from "apollo-link-context";
import { ApolloLink } from "apollo-link";

const cache = new InMemoryCache();

const authLink = setContext((_, { headers }) => {
  const token = "";
  return {
    headers: {
      ...headers,
      Authorization: token ? `Bearer ${token}` : ""
    }
  };
});

const client = new ApolloClient({
  link: ApolloLink.from([
    authLink,
    onError(({ graphQLErrors, networkError }) => {
      if (graphQLErrors)
        graphQLErrors.map(({ message, locations, path }) =>
          console.log(
            `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
          )
        );
      if (networkError) console.log(`[Network error]: ${networkError}`);
    }),
    new HttpLink({
      uri: "http://127.0.0.1:4000",
      credentials: "include"
    })
  ]),
  cache
});

cache.writeData({
  data: {
    isLoggedIn: false
  }
});

export default client;
