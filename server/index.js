// index.js

const express = require('express');
const mongoose = require('mongoose');
const job_order = require('./job_order'); // Import the JobOrder model
const cors = require('cors');

const app = express();
app.use(cors());
const port = 3000;

// Connect to your MongoDB database
mongoose.connect('mongodb+srv://sriram:password12345@humcen.iaiznbp.mongodb.net/partner?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

// API route to fetch all job orders
app.get('/api/job_order', async (req, res) => {
  try {
    const jobOrders = await job_order.find({});
    console.log(jobOrders); // Log the data to the console
    res.send(jobOrders);
  } catch (error) {
    console.error('Error fetching job orders:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
