import React, { Component } from "react";
import { ApolloClient, ApolloProvider } from "@apollo/client";

// components
import BookList from "./components/BookList";

// apollo client setup
const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client="client">
        <div id="main">
          <h1>I React</h1>
          <BookList />
        </div>
      </ApolloProvider>
    );
  }
}
export default App;
