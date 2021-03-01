import React from "react";
import { useQuery } from "@apollo/client";
import { getBooksQuery } from "../queries/queries";

function BookList() {
  const { loading, error, data } = useQuery(getBooksQuery);
  console.log(data);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return data.books.map((book) => {
    return <li key={book.id}>{book.name}</li>;
  });
}

export default BookList;
