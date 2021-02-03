const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema");

// creates an express application
const app = express();

// setup the middleware
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    graphiql: true,
  })
);

app.listen(4000, () => {
  console.log("now listening for requests on port 4000");
});
