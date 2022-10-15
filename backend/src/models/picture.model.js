const { db, DataTypes } = require("../utils/database.util")

const Picture = db.define("picture", {
   imageURL: {
      type: DataTypes.STRING,
      allowNull: false
   },
})

module.exports = { Picture }