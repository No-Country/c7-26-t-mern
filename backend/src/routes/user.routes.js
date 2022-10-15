const express = require('express');

// Controllers
const {
	getAllUsers,
	createUser,
	updateUser,
	deleteUser,
	login,
} = require('../controllers/user.controller');

// Middlewares
const { userExists } = require('../middlewares/exists.middlewares');
const {
	protectSession,
	protectUsersAccount,
	protectAdmin,
} = require('../middlewares/auth.middlewares');
const {
	createUserValidators,
} = require('../middlewares/userValidators.middlewares');

const userRouter = express.Router();

userRouter.post('/', createUserValidators, createUser);

userRouter.post('/login', login);

// Protecting below endpoints
userRouter.use(protectSession);

userRouter.get('/', getAllUsers);

userRouter.patch('/:id', userExists, protectUsersAccount, updateUser);

userRouter.delete('/:id', userExists, protectUsersAccount, deleteUser);

module.exports = { userRouter };
