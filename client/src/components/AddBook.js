import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { getAuthorsQuery } from "../queries/queries";

function DisplayAuthors() {
  const { loading, data } = useQuery(getAuthorsQuery);
  console.log(data);
  if (loading) return <option disabled>Loading authors</option>;
  //   if (error) return <p>Error :(</p>;
  return data.authors.map((author) => {
    return (
      <option key={author.id} value={author.id}>
        {author.name}
      </option>
    );
  });
}

function AddBook() {
  const [name, setName] = useState("");
  const [genre, setGenre] = useState("");
  const [authorId, setAuthorId] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log(`name: ${name}, genre: ${genre}, authorId: ${authorId}`);
  }

  return (
    <form id="add-book" onSubmit={handleSubmit}>
      <div className="field">
        <label>Book name:</label>
        <input type="text" onChange={(e) => setName(e.target.value)} />
      </div>

      <div className="field">
        <label>Genre:</label>
        <input type="text" onChange={(e) => setGenre(e.target.value)} />
      </div>

      <div className="field">
        <label>Author:</label>
        <select onChange={(e) => setAuthorId(e.target.value)}>
          <option>Select Author</option>
          {DisplayAuthors()}
        </select>
      </div>

      <button>+</button>
    </form>
  );
}

export default AddBook;
