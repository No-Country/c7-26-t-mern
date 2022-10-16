const express = require("express");
// import routers
const { categoryRouter } = require("./category.routes");
const { cityRouter } = require("./city.routes");
const { claimmerRouter } = require("./claimmer.routes");
const { institutionRouter } = require("./institution.routes");
const { userRouter } = require("./user.routes");

const routersApp = express.Router();
// route assignment
routersApp
   .use("/users", userRouter)
   .use("/institutions", institutionRouter)
   .use("/categories", categoryRouter)
   .use("/cities", cityRouter)
   .use("/claimmers", claimmerRouter)

module.exports = { routersApp }

//arquitectura MVC