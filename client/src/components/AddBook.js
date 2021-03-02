import React, { useState } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { getAuthorsQuery, addBookMutation } from "../queries/queries";

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
  const [addBookMut, { form }] = useMutation(addBookMutation);

  function handleSubmit(e) {
    e.preventDefault();
    addBookMut({
      variables: {
        name: form.name,
        genre: form.genre,
        authorId: form.authorId,
      },
    });
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

// using compose bound the query and mutation together
export default AddBook;
