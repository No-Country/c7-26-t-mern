const { db, DataTypes } = require("../utils/database.util")

const City = db.define("city", {
   name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
   }
})

module.exports = { City }