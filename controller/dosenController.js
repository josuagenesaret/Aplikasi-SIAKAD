const { Dosen } = require("../models")
const dosenController = {}

/*
    this is auto generate example, you can continue 

*/
dosenController.index = async (req, res) => {
    res.json({
        message: "Hello dosenController"
    })
}

dosenController.create = async (req, res) => {
    const { nama, nidn, alamat } = req.body
    try {
        const createDosen = await Dosen.create({
            nama: nama,
            nidn: nidn,
            alamat: alamat
        })
        return res.status(201).json({
            message: "Data Berhasil Ditambahkan"
        })
    } catch (error) {
        return res.status(500).json({
            message: error
        })
    }
}

dosenController.getAll = async (req, res) => {
    try {
        const getDosen = await Dosen.findAll({
            order: [["createdAt", "DESC"]]
        })
        return res.status(200).json({
            data: getDosen
        })
    } catch (error) {
        res.status(500).json({
            message: error
        })
    }
}

dosenController.getById = async (req, res) => {
    const { id } = req.params
    try {
        const getDetailDsn = await Dosen.findOne({
            where: {
                id: id
            }
        })
        res.status(200).json({
            data: getDetailDsn
        })
    } catch (error) {
        res.status(500).json({
            message: error
        })
    }
}

dosenController.update = async (req, res) => {
    const id = req.params.id
    const { nidn, nama, alamat } = req.body
    try {
        const getDetailDsn = await Dosen.findOne({
            where: {
                id: id
            }
        })
        if (getDetailDsn === null) {
            return res.status(404).json({
                message: "Data Tidak Ada"
            })
        }
        const updateDsn = await Dosen.update({
            nidn: nidn,
            nama: nama,
            alamat: alamat
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

dosenController.delete = async (req, res) => {
    const { id } = req.params
    try {
        const deleteDsn = await Dosen.destroy({
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


module.exports = dosenController