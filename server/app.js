const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema");
const mongoose = require("mongoose");

//creates an express application
const app = express();

//connect to mlab database
mongoose.connect(
  "mongodb+srv://testUser:<db-password>@my-db.rcles.mongodb.net/my-db?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    {
      if (err) {
        console.log("problem with connection" + err);
      } else {
        console.log("connected to db");
      }
    }
  }
);

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

module.exports = { mongoose };
