const mongoose = require('mongoose');

const PartnerSchema = new mongoose.Schema({
  _id: {
    userID: {
      type: String,
      required: true,
    },
  },
  pwd: {
    type: String,
    required: true,
  },
  full_name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  domain: {
    type: String,
    required: true,
  },
  "Patent Agent": {
    type: String,
    required: true,
  },
  cert_no: {
    type: String,
    required: true,
  },
  jurisdiction: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  zip_code: {
    type: String,
    required: true,
  },
  tax_ID_no: {
    type: String,
    required: true,
  },
  linkedin_profile: {
    type: String,
    required: true,
  },
  years_of_exp: {
    type: Number,
    required: true,
  },
  expertise_in: {
    type: [String],
    required: true,
  },
  can_handle: {
    type: String,
    required: true,
  },
  jobs: {
    type: [Number],
    required: true,
  },
});

const Partner = mongoose.model('Partner', PartnerSchema, 'partner');

module.exports = Partner;
