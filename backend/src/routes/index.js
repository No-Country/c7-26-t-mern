const express = require("express");
// import routers
const { institutionRouter } = require("./institution.routes");
const { userRouter } = require("./user.routes");

const routersApp = express.Router();
// route assignment
routersApp
   .use("/users", userRouter)
   .use("/institutions", institutionRouter)

module.exports = { routersApp }

//arquitectura MVC