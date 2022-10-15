const express = require('express');

// Controllers
const {
	create,
	getAll,
	getOne,
	eliminate,
	update
} = require('../controllers/institution.controller');

// Middlewares
const { institutionExists } = require('../middlewares/exists.middlewares');
const {
	createValidators,
	updateValidators
} = require('../middlewares/institution.middlewares');

const institutionRouter = express.Router();

// request methods
institutionRouter
	.delete("/:id", institutionExists, eliminate)
	.get('/', getAll)
	.get("/:id", institutionExists, getOne)
	.patch("/:id", institutionExists, updateValidators, update)
	.post("/", createValidators, create)

module.exports = { institutionRouter };
