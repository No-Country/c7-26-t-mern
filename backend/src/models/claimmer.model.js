const { db, DataTypes } = require("../utils/database.util")

const Claimmer = db.define("claimmer", {
   name: {
      type: DataTypes.STRING,
      allowNull: false
   },
   lastName: {
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
   DNI: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
   },
   avatar: DataTypes.STRING
})

module.exports = { Claimmer }