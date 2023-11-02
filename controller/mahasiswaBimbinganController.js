const { where } = require("sequelize")
const { Dosen, Mahasiswa, MahasiswaBimbingan } = require("../models")

const mahasiswaBimbinganController = {}

/*
    this is auto generate example, you can continue 

*/
mahasiswaBimbinganController.index = async (req, res) => {
    res.json({
        message: "Hello mahasiswaBimbinganController"
    })
}

mahasiswaBimbinganController.create = async (req, res) => {
    const { id_mahasiswa, id_dosen } = req.body
    try {
        const getMahasiswa = await Mahasiswa.findOne({
            where: {
                id: id_mahasiswa
            }
        })
        const getDosen = await Dosen.findOne({
            where: {
                id: id_dosen
            }
        })
        if (getMahasiswa === null || getDosen === null) {
            throw Error("Data Tidak Ditemukan")
        } else {
            const createMhsBimbingan = await MahasiswaBimbingan.create({
                id_mahasiswa: getMahasiswa.id,
                id_dosen: getDosen.id
            })
            return res.status(201).json({
                message: "Data Berhasil Dibuat"
            })
        }
    } catch (error) {
        return res.status(404).json({
            message: error.message
        })
    }
}

mahasiswaBimbinganController.getAll = async (req, res) => {
    try {
        const getMhsBimbingan = await Dosen.findAll({
            include: [
                {
                    model: Mahasiswa
                }
            ]
        })
        return res.status(200).json({
            data: getMhsBimbingan
        })
    } catch (error) {
        return res.status(404).json({
            message: error.message
        })
    }
}

mahasiswaBimbinganController.getById = async (req, res) => {
    const { id } = req.params
    try {
        const getMhsBimbingan = await Dosen.findOne({
            include: [
                {
                    model: Mahasiswa
                }
            ],
            where: {
                id: id
            }
        })
        return res.status(200).json({
            data: getMhsBimbingan
        })
    } catch (error) {
        return res.status(404).json({
            message: error.message
        })
    }
}

mahasiswaBimbinganController.update = async (req, res) => {
    const { id_mahasiswa, id_dosen } = req.body
    const { id } = req.params
    try {
        const getMahasiswa = await Mahasiswa.findOne({
            where: {
                id: id_mahasiswa
            }
        })
        const getDosen = await Dosen.findOne({
            where: {
                id: id_dosen
            }
        })
        if (getMahasiswa === null || getDosen === null) {
            throw Error("Data Tidak Ditemukan")
        } else {
            const updateMhsBimbingan = await MahasiswaBimbingan.update({
                id_mahasiswa: id_mahasiswa,
                id_dosen: id_dosen
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

mahasiswaBimbinganController.delete = async (req, res) => {
    const { id } = req.params
    try {
        const deleteMhsBimbingan = await MahasiswaBimbingan.destroy({
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

module.exports = mahasiswaBimbinganController