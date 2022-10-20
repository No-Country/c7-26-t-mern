const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

// Models
const { User } = require('../models/user.model');

// Utils
const { catchAsync } = require('../utils/catchAsync.util');
const { AppError } = require('../utils/appError.util');
const { categoryService, countryService, cityService, institutionService, claimmerService } = require('../services');
const { Picture, Claimmer } = require('../models');

dotenv.config({ path: './config.env' });

// Gen random jwt signs
// require('crypto').randomBytes(64).toString('hex') -> Enter into the node console and paste the command

const getAllUsers = catchAsync(async (req, res, next) => {
	const users = await User.findAll({
		attributes: { exclude: ['password'] },
		where: { status: 'active' },
	});

	res.status(200).json({
		status: 'success',
		data: { users },
	});
});

const createUser = catchAsync(async (req, res, next) => {
	const { name, email, password, role } = req.body;

	if (role !== 'admin' && role !== 'normal') {
		return next(new AppError('Invalid role', 400));
	}

	// Encrypt the password
	const salt = await bcrypt.genSalt(12);
	const hashedPassword = await bcrypt.hash(password, salt);

	const newUser = await User.create({
		name,
		email,
		password: hashedPassword,
		role,
	});

	// Remove password from response
	newUser.password = undefined;

	// 201 -> Success and a resource has been created
	res.status(201).json({
		status: 'success',
		data: { newUser },
	});
});

const updateUser = catchAsync(async (req, res, next) => {
	const { name } = req.body;
	const { user } = req;

	await user.update({ name });

	res.status(200).json({
		status: 'success',
		data: { user },
	});
});

const deleteUser = catchAsync(async (req, res, next) => {
	const { user } = req;

	await user.update({ status: 'deleted' });

	res.status(204).json({ status: 'success' });
});

const login = catchAsync(async (req, res, next) => {
	// Get email and password from req.body
	const { email, password } = req.body;


	// Validate if the user exist with given email
	const user = await Claimmer.findOne({
		where: { email },
	});

	// Compare passwords (entered password vs db password)
	// If user doesn't exists or passwords doesn't match, send error
	if (!user || !(await bcrypt.compare(password, user.password))) {
		return next(new AppError('Wrong credentials', 400));
	}

	// Remove password from response
	user.password = undefined;

	// Generate JWT (payload, secretOrPrivateKey, options)
	const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
		expiresIn: '30d',
	}, { algorithm: 'RS256' });
	console.log(token);

	res.status(200).json({
		status: 'success',
		data: { user, token },
	});
});

const loaderBD = catchAsync(async (req, res, next) => {
	const {
		categories,
		cities,
		countries,
		favours,
		institutions,
		data,
		claims,
		pictures,
	} = req.body

	const categoriesBD = await categoryService.saveBulk(categories)
	const countriesBD = await countryService.saveBulk(countries)
	const citiesBD = await cityService.saveBulk(cities) //array de instancias de los modelos
	const claimmersBD = await claimmerService.saveBulk(data)
	const institutionsBD = await institutionService.saveBulk(institutions)
	// const claimsBD = await claimmerService.saveBulk(claims) //
	const picturesBD = await Picture.bulkCreate(pictures)


	// for (const picture of picturesBD) {
	// 	if (picture.id === 1) await picture.setClaimmer(1)
	// 	if (picture.id === 2) await picture.setClaim(1)
	// 	if (picture.id === 3) await picture.setInstitution(2)
	// 	if (picture.id === 4) await picture.setCategory(3)
	// }

	res.status(201).json({
		status: "success",
		msg: "Successfully created"
	})

})

module.exports = {
	getAllUsers,
	createUser,
	updateUser,
	deleteUser,
	login,
	loaderBD
};