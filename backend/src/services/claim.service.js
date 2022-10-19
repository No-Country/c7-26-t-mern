const { Claim, Institution, Institution_Category } = require("../models")
const { Op } = require("../utils/database.util")

const modify = async (model, dataUpdate) => await model.update(dataUpdate)// array[number, models[]]

const remove = async (model) => await model.destroy() // number

const save = async (data) => await Claim.create(data)// model

const saveBulk = async (data) => await Claim.bulkCreate(data)

const searchAll = async (query) => { // models[]

   const { title, claimmerId, institutionCategoryId, limit, offset } = query

   //Contoller of the paginate
   const paginate = {
      limit: limit === undefined ? 999999 : Number(limit),
      offset: offset === undefined ? 0 : (Number(offset) - 1) * limit,
   }

   let where
   // Parameters for conditional sql queries
   if (title !== undefined) {
      where = {
         title: {
            [Op.iLike]: `%${title}%`
         }
      }
   } else if (claimmerId !== undefined) {
      where = {
         claimmerId
      }
   } else if (institutionCategoryId !== undefined) {
      where = {
         institutionCategoryId
      }
   }

   data = Claim.findAll({
      include: {
         model: Institution_Category,
      },
      where,
      ...paginate
   })

   return data
}

const searchById = async (id) => await Claim.findByPk(id) // model | null 

const searchByTitle = async (query) => {
   console.log(query);
   return await Claim.findAll({
      where: {
         title: {
            [Op.iLike]: `%${query}%`
         }
      }
   })
}

const searchNews = async ({ range1, range2 }) => {
   return await Claim.findAll({
      where: {
         updatedAt: {
            [Op.between]: [range1, range2]
         }
      }
   })
}

// const searchByClaimmer = async (idClaimmer) => await Claim.findByPk(id) // model | null 

// const searchByCategory = async (idCategory) => await Claim.findByPk(id) // model | null 

// const searchByInstitution = async (idInstitution) => await Claim.findByPk(id) // model | null 



module.exports = {
   modify,
   remove,
   searchAll,
   searchById,
   searchByTitle,
   searchNews,
   save,
   saveBulk,
}