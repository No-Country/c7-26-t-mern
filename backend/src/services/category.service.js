const { Category } = require("../models")

const searchAll = async () => {
   return await Category.findAll() // models[]
}

const searchById = async (id) => {
   return await Category.findByPk(id) // model | null 
}

const save = async (data) => {
   return await Category.create(data) // model
}

const modify = async (model, dataUpdate) => {
   return await model.update(dataUpdate) // array[number, models[]]
}

const remove = async (model) => {
   return await model.destroy() // number
}

module.exports = {
   searchAll,
   searchById,
   save,
   modify,
   remove
}