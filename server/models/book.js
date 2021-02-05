const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  name: String,
  genre: String,
  authorId: String,
});

// create a collection/model called Book based on schema(bookSchema)
module.exports = mongoose.model('Book', bookSchema)