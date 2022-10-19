// Models
const { User } = require("../models/user.model");

// Utils
const { catchAsync } = require("../utils/catchAsync.util");
const { AppError } = require("../utils/appError.util");

// services
const {
	categoryService,
	cityService,
	claimService,
	claimmerService,
	countryService,
	institutionService,
	pictureService
} = require("../services")

const userExists = catchAsync(async (req, _res, next) => {
	const { id } = req.params;

	const user = await User.findOne({
		attributes: { exclude: ["password"] },
		where: { id },
	});

	// If user doesn't exist, send error message
	if (!user) {
		return next(new AppError("User not found", 404));
	}

	// req.anyPropName = 'anyValue'
	req.user = user;
	next();
})

const categoryExists = catchAsync(async (req, _res, next) => {
	const { id } = req.params;

	const category = await categoryService.searchById(id)

	// If category doesn't exist, send error message
	if (!category) return next(new AppError('Category not found', 404));

	// req.anyPropName = 'anyValue'
	req.category = category;
	next();
});

const cityExists = catchAsync(async (req, _res, next) => {
	const { id } = req.params;

	const city = await cityService.searchById(id)

	// If city doesn't exist, send error message
	if (!city) return next(new AppError('City not found', 404));

	// req.anyPropName = 'anyValue'
	req.city = city;
	next();
});

const claimmerExists = catchAsync(async (req, _res, next) => {
	const { id } = req.params;

	const claimmer = await claimmerService.searchById(id)

	// If claimmer doesn't exist, send error message
	if (!claimmer) return next(new AppError('Claimmer not found', 404));

	// req.anyPropName = 'anyValue'
	req.claimmer = claimmer;
	next();
});

const claimExists = catchAsync(async (req, _res, next) => {
	const { id } = req.params;

	const claim = await claimService.searchById(id)

	// If claim doesn't exist, send error message
	if (!claim) return next(new AppError('Claim not found', 404));

	// req.anyPropName = 'anyValue'
	req.claim = claim;
	next();
});

const countryExists = catchAsync(async (req, _res, next) => {
	const { id } = req.params;

	const country = await countryService.searchById(id)

	// If country doesn't exist, send error message
	if (!country) return next(new AppError('Country not found', 404));

	// req.anyPropName = 'anyValue'
	req.country = country;
	next();
});

const institutionExists = catchAsync(async (req, _res, next) => {
	const { id } = req.params;

	const institution = await institutionService.searchById(id);

	// If institution doesn't exist, send error message
	if (!institution) return next(new AppError('Institution not found', 404));

	// req.anyPropName = 'anyValue'
	req.institution = institution;
	next();
});


const pictureExists = catchAsync(async (req, _res, next) => {
	const { id } = req.params;

	const picture = await pictureService.searchById(id);

	// If picture doesn't exist, send error message
	if (!picture) {
		return next(new AppError("Picture not found", 404));
	}

	// req.anyPropName = 'anyValue'
	req.picture = picture;
	next();
});

module.exports = {
	categoryExists,
	cityExists,
	claimExists,
	claimmerExists,
	countryExists,
	institutionExists,
	userExists,
	pictureExists,
};
