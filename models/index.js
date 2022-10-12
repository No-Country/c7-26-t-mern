const Claimmers = require("./claimmers");
const Claims = require("./claims");
const Cities = require("./cities");
const Countries = require("./countries");
const Roles = require("./roles");
const Favours = require("./favours");

Claimmers.belongsTo(Roles, {
  foreignKey: "idRole",
});

Claimmers.belongsTo(Cities, {
  foreignKey: "idCity",
});


Cities.belongsTo(Countries, {
  foreignKey: "idCountry",
});

Claims.belongsTo(Claimmers, {
  foreignKey: "idClaimmer",
});


Claims.belongsTo(Favours, {
  foreignKey: "idFavour",
});

module.exports = {
  Claimmers,
  Claims,
  Cities,
  Countries,
  Favours,
  Roles,
};
