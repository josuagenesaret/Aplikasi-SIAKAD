'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DosenMatkul extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  DosenMatkul.init({
    id_dosen: {
      type: DataTypes.INTEGER,
      references: {
        model: "Dosens",
        key: "id"
      }
    },
    id_matkul: {
      type: DataTypes.INTEGER,
      references: {
        model: "MataKuliahs",
        key: "id"
      }
    }
  }, {
    sequelize,
    modelName: 'DosenMatkul',
  });
  return DosenMatkul;
};