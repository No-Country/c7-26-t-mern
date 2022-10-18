const { Sequelize, DataTypes } = require("sequelize");

// configuration for database connection
const config = require("./config");

// Establish db connection
const db = new Sequelize(config["test"]);

module.exports = { db, DataTypes };
