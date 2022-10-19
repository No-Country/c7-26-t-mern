const bcrypt = require('bcryptjs');
const { Institution } = require("../models")

const searchAll = async () => {
   return await Institution.findAll({
      attributes: {
         exclude: ["password"]
      }
   }) // models[]
}

const searchById = async (id) => {
   return await Institution.findByPk(id, {
      attributes: {
         exclude: ["password"]
      }
   }) // model | null 
}

const save = async (data) => {
   const salt = await bcrypt.genSalt(12);
   const hashedPassword = await bcrypt.hash(data.password, salt);
   const newData = await Institution.create({
      ...data,
      password: hashedPassword
   })
   newData.addHook
   newData.password = undefined
   return newData// model
}

const saveBulk = async ({ data, categoryIds }) => {
   const institutions = await Institution.bulkCreate(data)
   for (const institution of institutions) {
      await institution.addCategories(categoryIds)
   }
   return institutions
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
   saveBulk,
   modify,
   remove
}