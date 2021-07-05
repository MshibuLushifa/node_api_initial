// Importing the dependencies
//  Config dotenv
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

// defining the Express app
const app = express();

// adding Helmat to enhance API's security
app.use(helmet());

// using bodyParser to parse JSON bodies into JS objects
app.use(express.json());

// enebling CORS for all requests
app.use(cors());

// adding morgan to log HTTP requests
app.use(morgan('dev'));

// defining root route
app.get('/', (req, res) => {
    res.send(`Hello, This response is coming from Node-API!`);
});

// TODO: define api routes here


// Export the app
module.exports = app;