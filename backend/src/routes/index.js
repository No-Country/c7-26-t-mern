const express = require("express");
// import routers
const { categoryRouter } = require("./category.routes");
const { cityRouter } = require("./city.routes");
const { claimRouter } = require("./claim.routes");
const { claimmerRouter } = require("./claimmer.routes");
const { countryRouter } = require("./country.routes");
const { institutionRouter } = require("./institution.routes");
const { pictureRouter } = require("./picture.routes");
const { userRouter } = require("./user.routes");

const routersApp = express.Router();
// route assignment
routersApp
   .use("/users", userRouter)
   .use("/institutions", institutionRouter)
   .use("/categories", categoryRouter)
   .use("/cities", cityRouter)
   .use("/claims", claimRouter)
   .use("/claimmers", claimmerRouter)
   .use("/countries", countryRouter)
   .use("/pictures", pictureRouter);

module.exports = { routersApp };

