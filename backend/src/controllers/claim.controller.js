// Utils imports
const { catchAsync } = require('../utils/catchAsync.util');

// services imports
const { searchAll, searchByTitle, save, modify, remove, saveBulk, searchNews } = require('../services/claim.service');
const { Claim, Institution_Category } = require('../models');

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
	const data = await searchAll(req.query)
	// 200 -> Success and the data has been recovered
	res.status(200).json({
		status: 'success',
		data,
	});
});
// 1 => id
const getOne = catchAsync(async (req, res, _next) => {

	const { claim } = req
	// 200 -> Success and the data has been recovered
	res.status(200).json({
		status: 'success',
		data: claim
	});
});

const eliminate = catchAsync(async (req, res, _next) => {

	await remove(req.claim)
	// 200 -> Success and the data has been deleted
	res.status(200).json({
		status: 'success',
		msg: "Claim was removed succesfull!"
	});
});

const update = catchAsync(async (req, res, _next) => {

	const data = await modify(req.claim, req.body);
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
