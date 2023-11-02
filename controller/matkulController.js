const { MataKuliah } = require("../models");
const matkulController = {}

/*
    this is auto generate example, you can continue 

*/
matkulController.index = async (req, res) => {
    res.json({
        message: "Hello matkulController"
    })
}

matkulController.create = async (req, res) => {
    const { kode_matkul, nama, sks } = req.body
    try {
        const createMatkul = await MataKuliah.create({
            kode_matkul: kode_matkul,
            nama: nama,
            sks: sks
        })
        return res.status(201).json({
            message: "Data Berhasil Ditambahkan"
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: error
        })
    }
}

matkulController.getAll = async (req, res) => {
    try {
        const getMatkul = await MataKuliah.findAll({
            order: [["createdAt", "DESC"]]
        })
        return res.status(200).json({
            data: getMatkul
        })
    } catch (error) {
        res.status(500).json({
            message: error
        })
    }
}

matkulController.getById = async (req, res) => {
    const { id } = req.params
    try {
        const getDetailMatkul = await MataKuliah.findOne({
            where: {
                id: id
            }
        })
        res.status(200).json({
            data: getDetailMatkul
        })
    } catch (error) {
        res.status(500).json({
            message: error
        })
    }
}

matkulController.update = async (req, res) => {
    const id = req.params.id
    const { kode_matkul, nama, sks } = req.body
    try {
        const getDetailMatkul = await MataKuliah.findOne({
            where: {
                id: id
            }
        })
        if (getDetailMatkul === null) {
            return res.status(404).json({
                message: "Data Tidak Ada"
            })
        }
        const updateMatkul = await MataKuliah.update({
            kode_matkul: kode_matkul,
            nama: nama,
            sks: sks
        }, {
            where: {
                id: id
            }
        })
        res.status(201).json({
            message: "Data Berhasil Diupdate"
        })
    } catch (error) {
        res.status(500).json({
            message: error
        })
    }
}

matkulController.delete = async (req, res) => {
    const { id } = req.params
    try {
        const deleteMatkul = await MataKuliah.destroy({
            where: {
                id: id
            }
        })
        res.status(201).json({
            message: "Data Berhasil Dihapus"
        })
    } catch (error) {
        res.status(500).json({
            message: error
        })
    }
}


module.exports = matkulController