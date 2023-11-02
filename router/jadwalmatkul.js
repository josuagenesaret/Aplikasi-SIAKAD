const express = require("express");
const jadwalMatkulController = require("../controller/jadwalMatkulController");
const routeJadwalMat = express.Router()

routeJadwalMat.post("/", jadwalMatkulController.create)
routeJadwalMat.get("/get", jadwalMatkulController.getAll)
routeJadwalMat.get("/get/:id", jadwalMatkulController.getById)
routeJadwalMat.put("/update/:id", jadwalMatkulController.update)
routeJadwalMat.delete("/delete/:id", jadwalMatkulController.delete)

module.exports = routeJadwalMat