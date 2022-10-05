const Claimmers = require("./claimmers");
const DecisionMakers = require("./decisionMaker");
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

DecisionMakers.belongsTo(Roles, {
  foreignKey: "idRole",
});

DecisionMakers.belongsTo(Cities, {
  foreignKey: "idCity",
});

Cities.belongsTo(Countries, {
  foreignKey: "idCountry",
});

Claims.belongsTo(Claimmers, {
  foreignKey: "idClaimmer",
});

Claims.belongsTo(DecisionMakers, {
  foreignKey: "idDecisionMaker",
});

Claims.belongsTo(Favours, {
  foreignKey: "idFavour",
});

module.exports = {
  Claimmers,
  DecisionMakers,
  Claims,
  Cities,
  Countries,
  Favours,
  Roles,
};
