const express = require('express');

// Controllers
const {
	create,
	getAll,
	getOne,
	eliminate,
	update,
	createBulk
} = require('../controllers/claimmer.controller');

// Middlewares
const { claimmerExists } = require('../middlewares/exists.middlewares');
const {
	createValidators,
	updateValidators
} = require('../middlewares/claimmer.middlewares');

const claimmerRouter = express.Router();

// request methods
claimmerRouter
	.delete("/:id", claimmerExists, eliminate)
	.get('/', getAll)
	.get("/:id", claimmerExists, getOne)
	.patch("/:id", claimmerExists, updateValidators, update)
	.post("/", createValidators, create)
	.post("/bulk", createBulk)

module.exports = { claimmerRouter };
