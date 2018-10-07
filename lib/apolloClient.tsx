import ApolloClient from "apollo-boost";
import fetch from "isomorphic-fetch" /* global fetch */;

const isBrowser = typeof window !== "undefined";

// Polyfill fetch() on the server (used by apollo-client)
if (!isBrowser) {
  (global as any).fetch = fetch;
}

const client = new ApolloClient({
  uri: "https://graphql-pokemon.now.sh"
});

export default client;
