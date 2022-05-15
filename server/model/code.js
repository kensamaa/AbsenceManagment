const mongoose = require("mongoose");
var schema = new mongoose.schema({
  code: {
    type: String,
    require: true,
    unique: true,
  },
  name: {
    type: String,
    require: true,
  },
});
const Codedb = mongoose.model("Code", schema);
module.exports = Codedb;
