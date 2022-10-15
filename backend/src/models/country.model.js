const { db, DataTypes } = require("../utils/database.util")

const Country = db.define("country", {
   name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
   }
})

module.exports = { Country }