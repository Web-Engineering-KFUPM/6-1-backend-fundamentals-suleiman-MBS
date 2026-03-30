
// TODO 1: Import Express
const express = require('express');
const cors = require('cors'); // We need this for React to communicate with our server

// TODO 2: Create the Express app and store it in a variable named app
const app = express();

// TODO 3: Allow React to access the server
app.use(cors());

// TODO 5: Create the home route "/"
app.get('/', (req, res) => {
  res.send('Welcome to the Backend Home Route!');
});

// TODO 6: Create the "/about" route
app.get('/about', (req, res) => {
  res.send('This is the About Route. The server is working!');
});

// TODO 7: Create the "/student" route
app.get('/student', (req, res) => {
  res.send('This is the Student Route. Hello from Express!');
});

// TODO 4: Start the server on port 3000
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});