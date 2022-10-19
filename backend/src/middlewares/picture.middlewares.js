const { body } = require("express-validator");
const { checkValidations } = require("./checkValidations.middlewares");

const createValidators = [
  body("imageURL")
    .isString()
    .withMessage("imageURL must be a string")
    .notEmpty()
    .withMessage("imageURL cannot be empty")
    .isLength({ min: 3 })
    .withMessage("imageURL must be at least 3 characters"),
  checkValidations,
];

const updateValidators = [
  body("imageURL")
    .isString()
    .withMessage("imageURL must be a string")
    .notEmpty()
    .withMessage("imageURL cannot be empty"),
  checkValidations,
];

module.exports = {
  createValidators,
  updateValidators,
};
