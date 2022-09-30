const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const DecisionMakers = sequelize.define(
  "decisionMaker",
  {
    decisionMakerName: {
      type: DataTypes.STRING,
      allowNule: false,
    },
    decisionMakerLastname: {
      type: DataTypes.STRING,
      allowNule: false,
    },
    decisionMakerEmail: {
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
    position: {
      type: DataTypes.STRING,
      allowNule: false,
    },
  },
  {
    tableName: "decisionmakers",
    timestamps: false,
  }
);

module.exports = DecisionMakers;
