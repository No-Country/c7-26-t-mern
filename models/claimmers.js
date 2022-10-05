const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Claimmers = sequelize.define(
  "claimmers",
  {
    claimmerName: {
      type: DataTypes.STRING,
      allowNule: false,
    },
    claimmerLastname: {
      type: DataTypes.STRING,
      allowNule: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNule: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNule: false,
    },
    rePassword: {
      type: DataTypes.STRING,
      allowNule: false,
    },
    profile: {
      type: DataTypes.STRING,
      allowNule: false,
    },
  },
  {
    tableName: "claimmers",
    timestamps: false,
  }
);

module.exports = Claimmers;
