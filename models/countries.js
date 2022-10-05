const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Countries = sequelize.define(
  "countries",
  {
    countryName: {
      type: DataTypes.STRING,
      allowNule: false,
    },
  },
  {
    tableName: "countries",
    timestamps: false,
  }
);

module.exports = Countries;
