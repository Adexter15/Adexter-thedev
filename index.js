const express = require('express');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000; // Set your desired port

// Middleware to enable CORS
app.use(cors());

// JSON parsing middleware
app.use(express.json());

// Define a GET route for retrieving items
app.get('/get-items', (req, res) => {
  res.send('Items were successfully retrieved.');
});

// Define a GET route for retrieving all items
app.get('/get-all-items', (req, res) => {
  res.send('All items were successfully retrieved.');
});

// Define a POST route for posting items
app.post('/post-items', (req, res) => {
  // You can access the posted data in req.body
  const postedData = req.body;
  console.log('Received items:', postedData);
  res.send('Items were successfully posted.');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
