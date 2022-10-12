const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Claims = sequelize.define(
  "claims",
  {
    claimTitle: {
      type: DataTypes.STRING,
      allowNule: false,
    },
    claimDescription: {
      type: DataTypes.STRING,
      allowNule: false,
    },
    claimPictureURL: {
      type: DataTypes.STRING,
      allowNule: false,
    },
    claimDate: {
      type: DataTypes.DATE,
      allowNule: false,
    },
    likes: {
      type: DataTypes.INTEGER,
      allowNule: false,
    },
  },
  {
    tableName: "claims",
    timestamps: false,
  }
);

module.exports = Claims;
