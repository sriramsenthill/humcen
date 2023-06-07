// job_order.js

const mongoose = require('mongoose');

const jobOrderSchema = new mongoose.Schema({
  _id: {
    job_no: { type: Number, required: true }
  },
  service: { type: String, required: true },
  country: { type: String, required: true },
  start_date: { type: Date, required: true },
  end_date: { type: Date, required: true },
  expected_end_date: { type: Date, required: true },
  expected_end_date_list: [{ type: Date, required: true }],
  budget: { type: Number, required: true },
  status: { type: String, required: true }
});

const JobOrder = mongoose.model('JobOrder', jobOrderSchema, 'job_order');

module.exports = JobOrder;
