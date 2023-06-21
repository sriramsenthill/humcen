const express = require('express');
const mongoose = require('mongoose');
const JobOrder = require('./job_order'); // Import the JobOrder model
const Admin = require('./admin'); // Import the Admin model
const Partner = require('./partner'); // Import the Partner model
const User = require('./user'); // Import the User model
const Customer = require('./customer'); // Import the Customer model
const bcrypt = require('bcrypt'); // Import the bcrypt library
const cors = require('cors');

const app = express();
app.use(express.json());

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

// Create a new job order
app.post('/api/job_order', async (req, res) => {
  try {
    const jobOrderData = req.body;

    // Set default values
    jobOrderData.service = 'Patent Drafting';
    jobOrderData.start_date = new Date();
    const endDate = new Date();
    endDate.setDate(endDate.getDate() + 7); // Add 7 days
    jobOrderData.end_date = endDate;
    jobOrderData.status = 'In Progress';

    // Fetch the latest job_no from the database
    const latestJobOrder = await JobOrder.findOne()
      .sort({ '_id.job_no': -1 })
      .limit(1)
      .exec();

    // Increment the job_no and assign it to the new job
    const newJobNo = latestJobOrder ? latestJobOrder._id.job_no + 1 : 1000;
    jobOrderData._id = { job_no: newJobNo };

    // Create a new JobOrder instance using the received data
    const jobOrder = new JobOrder(jobOrderData);

    // Save the job order to the database
    const savedJobOrder = await jobOrder.save();

    res.status(200).json(savedJobOrder);
  } catch (error) {
    console.error('Error creating job order:', error);
    res.status(500).send('Error creating job order');
  }
});

// API route to create a new customer
app.post('/api/customer', async (req, res) => {
  try {
    const customerData = req.body;

    const existingCustomer = await Customer.findOne({ email: customerData.email });

    if (existingCustomer) {
      // Email already exists, return an error response
      return res.status(400).json({ error: 'User already exists. Try creating with another email.' });
    }
    const saltRounds = 10;
    bcrypt.genSalt(saltRounds, (err, salt) => {
      if (err) {
        console.error(err);
        return res.status(500).send('Error creating/updating customer');
      }

      bcrypt.hash(customerData.password, salt, async (err, hashedPassword) => {
        if (err) {
          console.error(err);
          return res.status(500).send('Error creating/updating customer');
        }

        customerData.password = hashedPassword;

        const newCustomer = new Customer(customerData);
        const savedCustomer = await newCustomer.save();

        res.status(201).json(savedCustomer);
        console.log(savedCustomer);
      });
    });
  } catch (error) {
    console.error('Error creating/updating customer:', error);
    res.status(500).send('Error creating/updating customer');
  }
});

app.post('/api/auth', async (req, res) => {
  try {
    const { email, password } = req.body;
    // console.log(email);
    const user = await Customer.findOne({ email: email });

    if (!user) {
      // User not found, return an error response
      return res.status(400).json({ error: 'Invalid email or password.' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      // Incorrect password, return an error response
      return res.status(400).json({ error: 'Invalid email or password.' });
    }

    // Authentication successful, return a success response
    res.status(200).json({ message: 'Authentication successful.' });
  } catch (error) {
    console.error('Error authenticating user:', error);
    res.status(500).send('Error authenticating user');
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
