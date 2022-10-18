const express = require('express');

// Controllers
const {
	create,
	getAll,
	getOne,
	eliminate,
	update
} = require('../controllers/category.controller');

// Middlewares
const { categoryExists } = require('../middlewares/exists.middlewares');
const {
	createValidators,
	updateValidators
} = require('../middlewares/category.middlewares');

const categoryRouter = express.Router();

// request methods
categoryRouter
	.delete("/:id", categoryExists, eliminate)
	.get('/', getAll)
	.get("/:id", categoryExists, getOne)
	.patch("/:id", categoryExists, updateValidators, update)
	.post("/", createValidators, create)

module.exports = { categoryRouter };
