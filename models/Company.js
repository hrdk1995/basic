var mongoose = require("mongoose");

var CompSchema = new mongoose.Schema({
  name: String,
  address: String,
  city: String,
  owner: String,
  updated_date: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Company", CompSchema);
