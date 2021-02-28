import React from "react";
import { useQuery, gql } from "@apollo/client";

const getAuthorsQuery = gql`
  {
    authors {
      name
      id
    }
  }
`;

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
  return (
    <form id="add-book">
      <div className="field">
        <label>Book name:</label>
        <input type="text" />
      </div>

      <div className="field">
        <label>Genre:</label>
        <input type="text" />
      </div>

      <div className="field">
        <label>Author:</label>
        <select>
          <option>Select Author</option>
          {DisplayAuthors()}
        </select>
      </div>

      <button>+</button>
    </form>
  );
}

export default AddBook;
