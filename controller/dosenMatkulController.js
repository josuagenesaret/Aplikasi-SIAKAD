const { Dosen, MataKuliah, DosenMatkul } = require("../models");

const dosenMatkulController = {}

/*
    this is auto generate example, you can continue 

*/
dosenMatkulController.index = async (req, res) => {
    res.json({
        message: "Hello dosenMatkulController"
    })
}

dosenMatkulController.create = async (req, res) => {
    const { id_dosen, id_matkul } = req.body
    try {
        const getDosen = await Dosen.findOne({
            where: {
                id: id_dosen
            }
        })

        const getMatkul = await MataKuliah.findOne({
            where: {
                id: id_matkul
            }
        })
        if (getDosen === null || getMatkul === null) {
            throw Error("Data Tidak Ditemukan")
        } else {
            const createDsnMat = await DosenMatkul.create({
                id_dosen: getDosen.id,
                id_matkul: getMatkul.id
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

dosenMatkulController.getAll = async (req, res) => {
    try {
        const getDsnMat = await Dosen.findAll({
            include: [
                {
                    model: MataKuliah
                }
            ]
        })
        return res.status(200).json({
            data: getDsnMat
        })
    } catch (error) {
        return res.status(404).json({
            message: error.message
        })
    }
}

dosenMatkulController.getById = async (req, res) => {
    const { id } = req.params
    try {
        const getDsnMat = await Dosen.findOne({
            include: [
                {
                    model: MataKuliah
                }
            ],
            where: {
                id: id
            }
        })
        res.status(200).json({
            message: getDsnMat
        })
    } catch (error) {
        res.status(404).json({
            message: error.message
        })
    }
}

dosenMatkulController.update = async (req, res) => {
    const { id_dosen, id_matkul } = req.body
    const { id } = req.params
    try {
        const getDosen = await Dosen.findOne({
            where: {
                id: id_dosen
            }
        })

        const getMatkul = await MataKuliah.findOne({
            where: {
                id: id_matkul
            }
        })
        if (getDosen === null || getMatkul === null) {
            throw Error("Data Tidak Ditemukan")
        } else {
            const createDsnMat = await DosenMatkul.update({
                id_dosen: id_dosen,
                id_matkul: id_matkul
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

dosenMatkulController.delete = async (req, res) => {
    const { id } = req.params
    try {
        const deleteDsnMat = await DosenMatkul.destroy({
            where: {
                id: id
            }
        })
        res.status(201).json({
            message: "Data Berhasil Dihapus"
        })
    } catch (error) {
        res.status(404).json({
            message: error.message
        })
    }
}

module.exports = dosenMatkulController

