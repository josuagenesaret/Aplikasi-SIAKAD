const { MataKuliah, JadwalMatkul } = require("../models");

const jadwalMatkulController = {}

/*
    this is auto generate example, you can continue 

*/
jadwalMatkulController.index = async (req, res) => {
    res.json({
        message: "Hello jadwalMatkulController"
    })
}

jadwalMatkulController.create = async (req, res) => {
    const { id_matkul, hari, jam } = req.body
    try {
        const getMatkul = await MataKuliah.findOne({
            where: {
                id: id_matkul
            }
        })
        if (getMatkul === null) {
            throw Error("Data Tidak Ditemukan")
        } else {
            const createJadwalMat = await JadwalMatkul.create({
                id_matkul: getMatkul.id,
                hari: hari,
                jam: jam
            })
            return res.status(201).json({
                message: "Data Berhasil Ditambahkan"
            })
        }
    } catch (error) {
        return res.status(404).json({
            message: error.message
        })
    }
}

jadwalMatkulController.getAll = async (req, res) => {
    try {
        const getJadwalMat = await MataKuliah.findAll({
            include: [
                {
                    model: JadwalMatkul

                }
            ]
        })
        return res.status(200).json({
            data: getJadwalMat
        })
    } catch (error) {
        return res.status(404).json({
            message: error.message
        })
    }
}

jadwalMatkulController.getById = async (req, res) => {
    const { id } = req.params
    try {
        const getJadwalMat = await MataKuliah.findOne({
            include: [
                {
                    model: JadwalMatkul
                }
            ],
            where: {
                id: id
            }
        })
        res.status(200).json({
            data: getJadwalMat
        })
    } catch (error) {
        res.status(404).json({
            message: error.message
        })
    }
}

jadwalMatkulController.update = async (req, res) => {
    const { id_matkul, hari, jam } = req.body
    const { id } = req.params
    try {
        const getJadwalMat = await MataKuliah.findOne({
            where: {
                id: id_matkul
            }
        })
        if (getJadwalMat === null) {
            throw Error("Data Tidak Ditemukan")
        } else {
            const updateJadwalMat = await JadwalMatkul.update({
                id_matkul: id_matkul,
                hari: hari,
                jam: jam
            }, {
                where: {
                    id: id
                }
            })
            return res.status(201).json({
                message: "Data Berhasil Diubah"
            })
        }
    } catch (error) {
        return res.status(404).json({
            message: error.message
        })
    }
}

jadwalMatkulController.delete = async (req, res) => {
    const { id } = req.params
    try {
        const deleteJadwalMat = await JadwalMatkul.destroy({
            where: {
                id: id
            }
        })
        return res.status(201).json({
            message: "Data Berhasil Dihapus"
        })
    } catch (error) {
        return res.status(404).json({
            message: error.message
        })
    }
}

module.exports = jadwalMatkulController