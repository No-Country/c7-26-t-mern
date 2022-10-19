const { Sequelize, DataTypes, Op } = require("sequelize");

// configuration for database connection
const config = require("./config");

// Establish db connection
const db = new Sequelize(config["development"]);

module.exports = { db, DataTypes, Op };
