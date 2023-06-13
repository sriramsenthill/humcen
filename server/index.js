const express = require('express');
const mongoose = require('mongoose');
const JobOrder = require('./job_order'); // Import the JobOrder model
const Admin = require('./admin'); // Import the Admin model
const Partner = require('./partner'); // Import the Partner model
const User = require('./user'); // Import the User model
const cors = require('cors');

const app = express();
app.use(cors());
const port = 3000;

// Connect to your MongoDB database
mongoose
  .connect('mongodb+srv://sriram:password12345@humcen.iaiznbp.mongodb.net/humcen?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

// API route to fetch all job orders
app.get('/api/job_order', async (req, res) => {
  try {
    const jobOrders = await JobOrder.find({});
    console.log(jobOrders); // Log the data to the console
    res.send(jobOrders);
  } catch (error) {
    console.error('Error fetching job orders:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// API route to fetch all users
app.get('/api/user', async (req, res) => {
  try {
    const users = await User.find({});
    console.log(users); // Log the data to the console
    res.send(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// API route to fetch all partners
app.get('/api/partner', async (req, res) => {
  try {
    const partners = await Partner.find({});
    console.log(partners); // Log the data to the console
    res.send(partners);
  } catch (error) {
    console.error('Error fetching partners:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// API route to fetch all admins
app.get('/api/admin', async (req, res) => {
  try {
    const admins = await Admin.find({});
    console.log(admins); // Log the data to the console
    res.send(admins);
  } catch (error) {
    console.error('Error fetching admins:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
