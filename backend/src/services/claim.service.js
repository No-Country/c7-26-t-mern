const { Claim } = require("../models")

const modify = async (model, dataUpdate) => await model.update(dataUpdate)// array[number, models[]]

const remove = async (model) => await model.destroy() // number

const save = async (data) => await Claim.create(data)// model

const saveBulk = async (data) => await Claim.bulkCreate(data)

const searchAll = async () => await Claim.findAll() // models[]

const searchById = async (id) => await Claim.findByPk(id) // model | null 

const searchByClaimmer = async (idClaimmer) => await Claim.findByPk(id) // model | null 

const searchByCategory = async (idCategory) => await Claim.findByPk(id) // model | null 

const searchByInstitution = async (idInstitution) => await Claim.findByPk(id) // model | null 



module.exports = {
   modify,
   remove,
   searchAll,
   searchById,
   save,
   saveBulk,
}