const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Cities = sequelize.define(
  "cities",
  {
    cityName: {
      type: DataTypes.STRING,
      allowNule: false,
    },
  },
  {
    tableName: "cities",
    timestamps: false,
  }
);

module.exports = Cities;
