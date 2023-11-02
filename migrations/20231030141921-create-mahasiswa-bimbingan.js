'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('MahasiswaBimbingans', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_mahasiswa: {
        type: Sequelize.INTEGER,
        references: {
          model: "Mahasiswas",
          key: "id"
        }
      },
      id_dosen: {
        type: Sequelize.INTEGER,
        references: {
          model: "Dosens",
          key: "id"
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('MahasiswaBimbingans');
  }
};