const { db, DataTypes } = require("../utils/database.util")

const Claim = db.define("claim", {
   id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
   },
   title: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
   },
   description: {
      type: DataTypes.STRING,
      allowNull: false
   },
   address: {
      type: DataTypes.STRING,
      allowNull: false
   },
   status: {
      type: DataTypes.ENUM(["SEND", "VIEWD", "SOLVED"]),
      allowNull: false,
      defaultValue: "SEND"
   }
})

module.exports = { Claim }