const { Country } = require("../models")

const searchAll = async () => {
   return await Country.findAll() // models[]
}

const searchById = async (id) => {
   return await Country.findByPk(id) // model | null 
}

const save = async (data) => {
   return await Country.create(data) // model
}

const saveBulk = async (data) => await Country.bulkCreate(data)

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
   saveBulk,
   modify,
   remove
}