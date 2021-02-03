const graphql = require("graphql");
// lodash provides you diffrent tricks to find data, change data etc
const _ = require("lodash");

// create object types
const { GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLID, GraphQLInt } = graphql;

// dummy data book
var books = [
  { name: "Book1", genre: "Fantasy", id: "1" },
  { name: "Book2", genre: "Fiction", id: "2" },
  { name: "Book3", genre: "Sci-Fi", id: "3" },
];

// dummy data author
var authors = [
  { name: "author1", age: 43, id: "1" },
  { name: "author2", age: 53, id: "2" },
  { name: "author3", age: 34, id: "3" },
];

const BookType = new GraphQLObjectType({
  name: "Book",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    genre: { type: GraphQLString },
  }),
});

const AuthorType = new GraphQLObjectType({
    name: "Author",
    fields: () => ({
      id: { type: GraphQLID },
      name: { type: GraphQLString },
      age: { type: GraphQLInt },
    }),
  });

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    book: {
      // type of data we are looking for is book type
      type: BookType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        // code to get data from db or other source
        return _.find(books, { id: args.id });
      },
    },
    author: {
      type: AuthorType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        // code to get data from db or other source
        return _.find(authors, { id: args.id });
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});
