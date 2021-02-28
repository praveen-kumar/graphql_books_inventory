import React, { Component } from "react";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

// components
import BookList from "./components/BookList";

// intialize an ApolloClient instance
// you'll need to provide it the url of a running GraphQL server
const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div id="main">
          <h1>I React</h1>
          <BookList />
        </div>
      </ApolloProvider>
    );
  }
}
export default App;
