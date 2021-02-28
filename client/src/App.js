import React, { Component } from "react";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

// components
import BookList from "./components/BookList";
import AddBook from "./components/AddBook";

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
          <h1>My Reading List</h1>
          <BookList />
          <AddBook />
        </div>
      </ApolloProvider>
    );
  }
}
export default App;
