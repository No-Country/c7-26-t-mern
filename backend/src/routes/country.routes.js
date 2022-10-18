const express = require('express');

// Controllers
const {
	create,
	getAll,
	getOne,
	eliminate,
	update,
	createBulk
} = require('../controllers/country.controller');

// Middlewares
const { countryExists } = require('../middlewares/exists.middlewares');
const {
	createValidators,
	updateValidators
} = require('../middlewares/country.middlewares');

const countryRouter = express.Router();

// request methods
countryRouter
	.delete("/:id", countryExists, eliminate)
	.get('/', getAll)
	.get("/:id", countryExists, getOne)
	.patch("/:id", countryExists, updateValidators, update)
	.post("/", createValidators, create)
	.post("/bulk", createBulk)

module.exports = { countryRouter };
