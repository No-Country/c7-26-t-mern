const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

// Models
const { User } = require('../models/user.model');

// Utils
const { catchAsync } = require('../utils/catchAsync.util');
const { AppError } = require('../utils/appError.util');
const { Claim, City, Country, Institution, Picture, Claimmer, Category } = require('../models');

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
	const user = await User.findOne({
		where: { email, status: 'active' },
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
	});

	res.status(200).json({
		status: 'success',
		data: { user, token },
	});
});

const loaderBD = catchAsync(async (req, res, next) => {
	const {
		claims,
		categories,
		cities,
		countries,
		favours,
		institutions,
		pictures,
		claimmers,
		institution_categories
	} = req.body

	const countriesBD = await Country.bulkCreate(countries)
	const citiesBD = await City.bulkCreate(cities) //array de instancias de los modelos
	const institutionsBD = await Institution.bulkCreate(institutions)
	const claimmersBD = await Claimmer.bulkCreate(claimmers)
	const categoriesBD = await Category.bulkCreate(categories)
	const claimsBD = await Claim.bulkCreate(claims) //
	const picturesBD = await Picture.bulkCreate(pictures)

	for (const country of countriesBD) {
		if (country.name === "Argentina") await country.addCity(1)
		if (country.name === "Venezuela") await country.addCity(2)
		if (country.name === "Ecuador") await country.addCity(3)
		if (country.name === "Colombia") await country.addCity(4)
		if (country.name === "Mexico") await country.addCity(5)
	}


	for (const city of citiesBD) {
		if (city.name === "Bogota") {
			await city.addClaimmer(1)
			await city.addInstitution(1)
		}
		if (city.name === "Buenos Aires") {
			await city.addClaimmer(2)
			await city.addInstitution(2)
		}
		if (city.name === "Caracas") {
			await city.addClaimmer(3)
			await city.addInstitution(3)
		}
		if (city.name === "Quito") {
			await city.addClaimmer(4)
			await city.addInstitution(4)
		}
		if (city.name === "Mexico DF") {
			await city.addClaimmer(5)
			await city.addInstitution(5)
		}

	}

	for (const institution of institutionsBD) {
		if (institution.id === 1) await institution.addCategories([1, 2, 3, 4])
		if (institution.id === 2) await institution.addCategories([2, 3, 5])
		if (institution.id === 3) await institution.addCategories([1, 3, 4])
		if (institution.id === 4) await institution.addCategories([1, 3])
		if (institution.id === 5) await institution.addCategories([4, 5])
	}

	for (const claimmer of claimmersBD) {
		if (claimmer.id === 1) await claimmer.addClaim(1)
		if (claimmer.id === 2) await claimmer.addClaim(2)
		if (claimmer.id === 3) await claimmer.addClaim(3)
		if (claimmer.id === 4) await claimmer.addClaim(4)
		if (claimmer.id === 5) await claimmer.addClaim(5)
	}

	for (const category of categoriesBD) {
		if (category.id === 1) await category.addClaim(1)
		if (category.id === 2) await category.addClaim(2)
		if (category.id === 3) await category.addClaim(3)
		if (category.id === 4) await category.addClaim(4)
		if (category.id === 5) await category.addClaim(5)
	}

	for (const claim of claimsBD) {
		if (claim.id === 1) await claim.addFavorite([2, 3, 4, 5])
		if (claim.id === 2) await claim.addFavorite([3, 4, 5])
		if (claim.id === 3) await claim.addFavorite([4, 5])
		if (claim.id === 4) await claim.addFavorite(5)
		if (claim.id === 5) await claim.addFavorite(1)
	}

	for (const picture of picturesBD) {
		if (picture.id === 1) await picture.setClaimmer(1)
		if (picture.id === 2) await picture.setClaim(1)
		if (picture.id === 3) await picture.setInstitution(2)
		if (picture.id === 4) await picture.setCategory(3)
	}

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
