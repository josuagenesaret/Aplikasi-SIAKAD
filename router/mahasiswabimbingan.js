const express = require("express");
const mahasiswaBimbinganController = require("../controller/mahasiswaBimbinganController")
const routeMhsBimbingan = express.Router()

routeMhsBimbingan.post("/", mahasiswaBimbinganController.create)
routeMhsBimbingan.get("/get", mahasiswaBimbinganController.getAll)
routeMhsBimbingan.get("/get/:id", mahasiswaBimbinganController.getById)
routeMhsBimbingan.put("/update/:id", mahasiswaBimbinganController.update)
routeMhsBimbingan.delete("/delete/:id", mahasiswaBimbinganController.delete)


module.exports = routeMhsBimbingan