'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MataKuliah extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      MataKuliah.belongsToMany(models.Dosen, { through: "DosenMatkul", foreignKey: "id_matkul" });
      MataKuliah.hasMany(models.JadwalMatkul, { foreignKey: "id_matkul" })
    }
  }
  MataKuliah.init({
    kode_matkul: DataTypes.STRING,
    nama: DataTypes.STRING,
    sks: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'MataKuliah',
  });
  return MataKuliah;
};