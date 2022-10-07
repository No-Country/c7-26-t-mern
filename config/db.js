const { sequelize, Sequelize } = require("sequelize");
const { MYSQL_ADDON_USER, MYSQL_ADDON_DB, MYSQL_ADDON_PORT, MYSQL_ADDON_HOST, MYSQL_ADDON_PASSWORD } = process.env;
// const {MYSQL_ADDON_HOST, MYSQL_ADDON_DB, MYSQL_ADDON_USER, MYSQL_ADDON_PORT, MYSQL_ADDON_PASSWORD} = require('../dbenviroment.js')


const conString = `mysql://${MYSQL_ADDON_USER}${MYSQL_ADDON_PASSWORD && `:${MYSQL_ADDON_PASSWORD}`
  }@${MYSQL_ADDON_HOST}:${MYSQL_ADDON_PORT}/${MYSQL_ADDON_DB}`;

const seq = new Sequelize(conString);

seq
  .authenticate()
  .then(() => {
    console.log("todo OK");
  })
  .catch((e) => {
    console.log(e);
  });

module.exports = seq;

console.log(conString);
