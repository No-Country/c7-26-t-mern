const { body } = require('express-validator');
const { checkValidations } = require('./checkValidations.middlewares');

const createValidators = [
	body('name')
		.isString()
		.withMessage('Name must be a string')
		.notEmpty()
		.withMessage('Name cannot be empty')
		.isLength({ min: 3 })
		.withMessage('Name must be at least 3 characters'),
	checkValidations,
];

const updateValidators = [
	body('name')
		.isString()
		.withMessage('Name must be a string')
		.notEmpty()
		.withMessage('Name cannot be empty'),
	checkValidations,
];

module.exports = {
	createValidators,
	updateValidators
};
