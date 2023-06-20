const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const Customer = mongoose.model('Customer', customerSchema, "customer");

module.exports = Customer;
