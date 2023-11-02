const express = require("express");
const dosenMatkulController = require("../controller/dosenMatkulController")
const routeDsnMat = express.Router()

routeDsnMat.post("/", dosenMatkulController.create)
routeDsnMat.get("/get", dosenMatkulController.getAll)
routeDsnMat.get("/get/:id", dosenMatkulController.getById)
routeDsnMat.put("/update/:id", dosenMatkulController.update)
routeDsnMat.delete("/delete/:id", dosenMatkulController.delete)

module.exports = routeDsnMat