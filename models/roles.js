const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Roles = sequelize.define(
  "roles",
  {
    roleName: {
      type: DataTypes.STRING,
      allowNule: false,
    },
  },
  {
    tableName: "roles",
    timestamps: false,
  }
);

module.exports = Roles;
