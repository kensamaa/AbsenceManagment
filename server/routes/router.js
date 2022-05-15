const express = require("express");
const route = express.Router();
const services = require("../service/render.js");
const controller = require("../controller/controller");
route.get("/", services.indexRoute);

route.get("/students", services.students);

//api
route.get("/api/codes/:code", controller.findCode);
route.get("/api/students/:id", controller.findStudents);
module.exports = route;
