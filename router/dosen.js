const express = require("express");
const dosenController = require("../controller/dosenController")
const routeDosen = express.Router();

routeDosen.post("/", dosenController.create)
routeDosen.get("/get", dosenController.getAll)
routeDosen.get("/get/:id", dosenController.getById)
routeDosen.put("/update/:id", dosenController.update)
routeDosen.delete("/delete/:id", dosenController.delete)

module.exports = routeDosen