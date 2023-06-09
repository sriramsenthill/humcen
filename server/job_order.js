const mongoose = require('mongoose');

const jobOrderSchema = new mongoose.Schema({
  _id: {
    job_no: { type: Number }
  },
  service: { type: String },
  country: { type: String },
  start_date: { type: Date },
  end_date: { type: Date },
  expected_end_date: { type: Date },
  budget: { type: String   },
  status: { type: String },
  pay_status: { type: String },
  amount: { type: Number },
  userID: { type: String },
  userName: { type: String },
  partnerID: { type: String },
  partnerName: { type: String },
  job_title: { type: String },
  job_desc: { type: String },
  accept_policies: { type: Boolean },
  keywords: { type: String },
  service_specific_files: {
    invention_details: { type: Object },
    application_type: { type: String },
    details: { type: Object },
    applicants: { type: Object },
    investors: { type: Object }
  },
  domain: { type: String },
  time_of_delivery: { type: String }
});

const JobOrder = mongoose.model('JobOrder', jobOrderSchema, 'job_order');

module.exports = JobOrder;
