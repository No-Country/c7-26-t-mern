const { sequelize, Sequelize } = require("sequelize");
const { DB_USER, DB_NAME, DB_PORT, DB_SERVER, DB_PwD } = process.env;

const MYSQL_ADDON_HOST='b1zbyfdcyv520znbyzz6-mysql.services.clever-cloud.com'
const MYSQL_ADDON_DB='b1zbyfdcyv520znbyzz6'
const MYSQL_ADDON_USER='u12zma8olgktih9e'
const MYSQL_ADDON_PORT=3306
const MYSQL_ADDON_PASSWORD='j7GjaAWZRNFeLGDWKYgW'

const conString = `mysql://${MYSQL_ADDON_USER}${
  MYSQL_ADDON_PASSWORD && `:${MYSQL_ADDON_PASSWORD}`
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
