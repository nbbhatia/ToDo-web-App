const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const todoSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  added_date: {
    type: Date,
    default: Date.now(),
  },
});
// export Schema

module.exports = Todo = mongoose.model("todo", todoSchema);
