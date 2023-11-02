const express = require("express");
const exampleController = require("../controller/exampleController");
const routeMahasiswa = require("./mahasiswa");
const routeDosen = require("./dosen");
const routeMatkul = require("./matkul");
const routeDsnMat = require("./dosenmatkul");
const routeJadwalMat = require("./jadwalmatkul");
const routeMhsBimbingan = require("./mahasiswabimbingan");
const route = express.Router()

route.get('/', exampleController.index)
route.use("/mahasiswa", routeMahasiswa)
route.use("/dosen", routeDosen)
route.use("/matkul", routeMatkul)
route.use("/dosenmatkul", routeDsnMat)
route.use("/jadwal-matkul", routeJadwalMat)
route.use("/mahasiswa-bimbingan", routeMhsBimbingan)

module.exports = route