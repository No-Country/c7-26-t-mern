// Utils imports
const { catchAsync } = require('../utils/catchAsync.util');

// services imports
const { searchAll, save, modify, remove, saveBulk } = require('../services/city.service');

//CRUD
const create = catchAsync(async (req, res, _next) => {
	const data = await save(req.body)
	// 201 -> Success and a resource has been created
	res.status(201).json({
		status: 'success',
		data,
	});
});

const createBulk = catchAsync(async (req, res, _next) => {
	const data = await saveBulk(req.body)

	res.status(201).json({
		status: 'success',
		data,
	});
})

const getAll = catchAsync(async (req, res, _next) => {
	const data = await searchAll()
	// 200 -> Success and the data has been recovered
	res.status(200).json({
		status: 'success',
		data,
	});
});

const getOne = catchAsync(async (req, res, _next) => {
	const { city } = req
	// 200 -> Success and the data has been recovered
	res.status(200).json({
		status: 'success',
		data: city
	});
});

const eliminate = catchAsync(async (req, res, _next) => {
	await remove(req.city)
	// 200 -> Success and the data has been deleted
	res.status(200).json({
		status: 'success',
		msg: "Institution was removed succesfull!"
	});
});

const update = catchAsync(async (req, res, _next) => {
	const data = await modify(req.city, req.body);
	// 200 -> Success and the data has been modified
	res.status(200).json({
		status: 'success',
		data,
	});
});

module.exports = {
	create,
	createBulk,
	getAll,
	getOne,
	eliminate,
	update
};
