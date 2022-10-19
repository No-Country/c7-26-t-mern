const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

// Routers
const { routersApp } = require("./routes")

// Controllers
const { globalErrorHandler } = require('./controllers/error.controller');

// Init our Express app
const app = express();

app.use(cors());
// Enable Express app to receive JSON data
app.use(express.json());

// Show type of requests
app.use(morgan("dev"))

// Define endpoints
app.use('/api/v1', routersApp);

// Global error handler
app.use(globalErrorHandler);

// Catch non-existing endpoints
app.all('*', (req, res) => {
	res.status(404).json({
		status: 'error',
		message: `${req.method} ${req.url} does not exists in our server`,
	});
});

module.exports = { app };
