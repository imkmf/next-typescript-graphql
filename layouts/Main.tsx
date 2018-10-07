import * as React from "react";
import { ApolloProvider } from "react-apollo";
import client from "../lib/apolloClient";

export default ({ children }: { children: React.ReactNode }) => (
  <ApolloProvider client={client}>{children}</ApolloProvider>
);
