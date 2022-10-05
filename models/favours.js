const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Favours = sequelize.define(
  "favours",
  {
    idClaims: {
      type: DataTypes.STRING,
      allowNule: false,
    },
  },
  {
    tableName: "favours",
    timestamps: false,
  }
);

module.exports = Favours;
