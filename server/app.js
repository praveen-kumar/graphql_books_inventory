const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema");
require("dotenv").config();
const mongoose = require("mongoose");
const cors = require("cors");

//creates an express application
const app = express();

// allow cross-origin requests
app.use(cors());

//connect to mlab database
mongoose.connect(
  `mongodb+srv://testUser:${process.env.DB_PASSWORD}@my-db.rcles.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`,
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
