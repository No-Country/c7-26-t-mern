const { Picture } = require("../models");

const searchAll = async () => {
  return await Picture.findAll(); // models[]
};

const searchById = async (id) => {
  return await Picture.findByPk(id); // model | null
};

const save = async (data) => {
  return await Picture.create(data); // model
};

const modify = async (model, dataUpdate) => {
  return await model.update(dataUpdate); // array[number, models[]]
};

const remove = async (model) => {
  return await model.destroy(); // number
};

module.exports = {
  searchAll,
  searchById,
  save,
  modify,
  remove,
};
