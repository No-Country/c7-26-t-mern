const express = require("express");

// Controllers
const {
  create,
  getAll,
  getOne,
  eliminate,
  update,
} = require("../controllers/picture.controller");

// Middlewares
const { pictureExists } = require("../middlewares/exists.middlewares");
const {
  createValidators,
  updateValidators,
} = require("../middlewares/picture.middlewares");

const pictureRouter = express.Router();

// request methods
pictureRouter
  .delete("/:id", pictureExists, eliminate)
  .get("/", getAll)
  .get("/:id", pictureExists, getOne)
  .patch("/:id", pictureExists, updateValidators, update)
  .post("/", createValidators, create);

module.exports = { pictureRouter };
