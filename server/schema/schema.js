const graphql = require("graphql");
// lodash provides you diffrent tricks to find data, change data etc
const_ = require("lodash");

// create object types
const { GraphQLObjectType, GraphQLString, GraphQLSchema } = graphql;

// dummy data
var books = [
  { name: "Book1", genre: "Fantasy", id: "1" },
  { name: "Book2", genre: "Fiction", id: "2" },
  { name: "Book3", genre: "Sci-Fi", id: "3" },
];

const BookType = new GraphQLObjectType({
  name: "Book",
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    genre: { type: GraphQLString },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    book: {
      // type of data we are looking for is book type
      type: BookType,
      args: { id: { type: GraphQLString } },
      resolve(parent, args) {
        // code to get data from db or other source
        return _.find(books, { id: args.id });
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});
