const { db, DataTypes } = require("../utils/database.util")

const Institution = db.define("institution", {
   name: {
      type: DataTypes.STRING,
      allowNull: false
   },
   email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
   },
   password: {
      type: DataTypes.STRING,
      allowNull: false
   },
   RUT: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
   },
   address: {
      type: DataTypes.STRING,
      allowNull: false
   }
})

module.exports = { Institution }