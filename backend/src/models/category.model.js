const { db, DataTypes } = require("../utils/database.util")

const Category = db.define("category", {
   name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
   },
})

module.exports = { Category }