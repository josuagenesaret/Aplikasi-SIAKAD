'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class JadwalMatkul extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      JadwalMatkul.belongsTo(models.DosenMatkul, { foreignKey: "id_matkul" })
    }
  }
  JadwalMatkul.init({
    id_matkul: {
      type: DataTypes.INTEGER,
      references: {
        model: "MataKuliahs",
        key: "id"
      }
    },
    hari: DataTypes.STRING,
    jam: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'JadwalMatkul',
  });
  return JadwalMatkul;
};