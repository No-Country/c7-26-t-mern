const bcrypt = require('bcryptjs');
const { Claimmer } = require("../models")

const searchAll = async () => {
   return await Claimmer.findAll({
      attributes: {
         exclude: ["password"]
      }
   }) // models[]
}

const searchById = async (id) => {
   return await Claimmer.findByPk(id, {
      attributes: {
         exclude: ["password"]
      }
   }) // model | null 
}

const save = async (data) => {
   const salt = await bcrypt.genSalt(12);
   const hashedPassword = await bcrypt.hash(data.password, salt);
   const newData = await Claimmer.create({
      ...data,
      password: hashedPassword
   })
   newData.password = undefined
   return newData// model
}

const saveBulk = async (data) => await Claimmer.bulkCreate(data)

const modify = async (model, dataUpdate) => {
   const newData = await model.update(dataUpdate)
   newData.password = undefined
   return newData // array[number, models[]]
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