//app.js
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const indexRouter = require('./routes/index');
const app = express();

app.use(bodyParser.urlencoded({ extended: true })); // This parses form data
app.use(bodyParser.json()); // This parses JSON data

// Set the view engine to EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));

// Parse application/json
app.use(express.json());

// Static files
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/', indexRouter);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack); // This will print the error to the console
  res.status(500).send('Something went wrong!'); // Send a 500 status and error message
});

