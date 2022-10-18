const express = require('express');

// Controllers
const {
	create,
	getAll,
	getOne,
	eliminate,
	update,
	createBulk
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
	.post("/bulk", createBulk)

module.exports = { institutionRouter };
