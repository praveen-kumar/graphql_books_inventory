const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const authorSchema = new Schema({
  name: String,
  age: Number,
});

// create a collection/model 
module.exports = mongoose.model("Author", authorSchema);
