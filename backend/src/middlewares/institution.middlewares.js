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
	body('email').isEmail().withMessage('Must provide a valid email'),
	body('password')
		.isString()
		.withMessage('Password must be a string')
		.notEmpty()
		.withMessage('Password cannot be empty')
		.isLength({ min: 8 })
		.withMessage('Password must be at least 8 characters'),
	body('RUT')
		.isString()
		.withMessage('RUT must be a string')
		.notEmpty()
		.withMessage('RUT cannot be empty'),
	body('address')
		.isString()
		.withMessage('Address must be a string')
		.notEmpty()
		.withMessage('Address cannot be empty'),
	checkValidations,
];

const updateValidators = [
	body('address')
		.isString()
		.withMessage('Address must be a string')
		.notEmpty()
		.withMessage('Address cannot be empty'),
	checkValidations,
];

module.exports = {
	createValidators,
	updateValidators
};
