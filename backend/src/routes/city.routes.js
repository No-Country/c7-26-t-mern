const express = require('express');

// Controllers
const {
	create,
	getAll,
	getOne,
	eliminate,
	update
} = require('../controllers/city.controller');

// Middlewares
const { cityExists } = require('../middlewares/exists.middlewares');
const {
	createValidators,
	updateValidators
} = require('../middlewares/city.middlewares');

const cityRouter = express.Router();

// request methods
cityRouter
	.delete("/:id", cityExists, eliminate)
	.get('/', getAll)
	.get("/:id", cityExists, getOne)
	.patch("/:id", cityExists, updateValidators, update)
	.post("/", createValidators, create)

module.exports = { cityRouter };
