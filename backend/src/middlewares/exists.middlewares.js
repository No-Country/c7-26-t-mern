// Models
const { User } = require('../models/user.model');

// Utils
const { catchAsync } = require('../utils/catchAsync.util');
const { AppError } = require('../utils/appError.util');

// services
const institutionService = require('../services/institution.service');

const userExists = catchAsync(async (req, _res, next) => {
	const { id } = req.params;

	const user = await User.findOne({
		attributes: { exclude: ['password'] },
		where: { id },
	});

	// If user doesn't exist, send error message
	if (!user) {
		return next(new AppError('User not found', 404));
	}

	// req.anyPropName = 'anyValue'
	req.user = user;
	next();
});

const institutionExists = catchAsync(async (req, _res, next) => {
	const { id } = req.params;

	const institution = await institutionService.searchById(id)

	// If institution doesn't exist, send error message
	if (!institution) {
		return next(new AppError('Institution not found', 404));
	}

	// req.anyPropName = 'anyValue'
	req.institution = institution;
	next();
});



module.exports = {
	userExists,
	institutionExists
};
