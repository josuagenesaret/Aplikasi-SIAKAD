const express = require("express");
const matkulController = require("../controller/matkulController")
const routeMatkul = express.Router()

routeMatkul.post("/", matkulController.create)
routeMatkul.get("/get", matkulController.getAll)
routeMatkul.get("/get/:id", matkulController.getById)
routeMatkul.put("/update/:id", matkulController.update)
routeMatkul.delete("/delete/:id", matkulController.delete)

module.exports = routeMatkul