const mongoose = require("mongoose");
const products = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  title: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 500
  },
  value: {
    type: Number,
    required: true,
    minlength: 2,
    maxlength: 4
  },
  amount: {
    type: Number,
    required: true,
    minlength: 2,
    maxlength: 10
  },
  price: {
    type: String,
    required: true,
    minlength: 0,
    maxlength: 13
  },
  category: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 50
  },
  sub_category: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 50
  },
  imageUrl: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50
  },
  body: {
    type: String,
    minlength: 0,
    maxlength: 5000
  }
});
module.exports = mongoose.model("products", products);
