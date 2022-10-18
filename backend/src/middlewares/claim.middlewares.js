const { body } = require('express-validator');
const { checkValidations } = require('./checkValidations.middlewares');

const createValidators = [
	body('title')
		.isString()
		.withMessage('Title must be a string')
		.notEmpty()
		.withMessage('Title cannot be empty')
		.isLength({ min: 3 })
		.withMessage('Title must be at least 3 characters'),
	body('description')
		.isString()
		.withMessage('Description must be a string')
		.notEmpty()
		.withMessage('Description cannot be empty')
		.isLength({ min: 3 })
		.withMessage('Description must be at least 3 characters'),
	body('address')
		.isString()
		.withMessage('Address must be a string')
		.notEmpty()
		.withMessage('Address cannot be empty')
		.isLength({ min: 3 })
		.withMessage('Address must be at least 8 characters'),
	checkValidations,
];

const updateValidators = [
	body('title')
		.isString()
		.withMessage('Title must be a string')
		.notEmpty()
		.withMessage('Title cannot be empty')
		.isLength({ min: 3 })
		.withMessage('Title must be at least 3 characters'),
	body('description')
		.isString()
		.withMessage('Description must be a string')
		.notEmpty()
		.withMessage('Description cannot be empty')
		.isLength({ min: 3 })
		.withMessage('Description must be at least 3 characters'),
	body('address')
		.isString()
		.withMessage('Address must be a string')
		.notEmpty()
		.withMessage('Address cannot be empty')
		.isLength({ min: 3 })
		.withMessage('Address must be at least 8 characters'),
	checkValidations,
];

module.exports = {
	createValidators,
	updateValidators
};

// title: {
// 	type: DataTypes.STRING,
// 	allowNull: false,
// 	unique: true,
// },
// description: {
// 	type: DataTypes.STRING,
// 	allowNull: false
// },
// address: {
// 	type: DataTypes.STRING,
// 	allowNull: false
// },
// status: {
// 	type: DataTypes.ENUM(["SEND", "VIEWD", "SOLVED"]),
// 	allowNull: false,
// 	defaultValue: "SEND"
// }