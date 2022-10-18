const express = require('express');

// Controllers
const {
	create,
	getAll,
	getOne,
	eliminate,
	update,
	createBulk
} = require('../controllers/claim.controller');

// Middlewares
const { claimExists } = require('../middlewares/exists.middlewares');
const {
	createValidators,
	updateValidators
} = require('../middlewares/claim.middlewares');

const claimRouter = express.Router();

// request methods
claimRouter
	.delete("/:id", claimExists, eliminate)
	.get('/', getAll)
	.get("/:id", claimExists, getOne)
	.patch("/:id", claimExists, updateValidators, update)
	.post("/", createValidators, create)
	.post("/bulk", createBulk)

module.exports = { claimRouter };
