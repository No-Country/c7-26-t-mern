const { sequelize, Sequelize } = require("sequelize");
const { DB_USER, DB_NAME, DB_PORT, DB_SERVER, DB_PwD } = process.env;
const conString = `mysql://${DB_USER}${
  DB_PwD && `:${DB_PwD}`
}@${DB_SERVER}:${DB_PORT}/${DB_NAME}`;
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
