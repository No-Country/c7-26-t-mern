const { db, DataTypes } = require("../utils/database.util")

const Institution_Category = db.define("institution_category", {
   id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
   }
})

module.exports = { Institution_Category }