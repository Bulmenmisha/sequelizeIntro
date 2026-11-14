'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  // Применение миграции: создаём таблицу Apps
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Apps', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      size: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
    });
  },

  // Откат миграции: удаляем таблицу Apps
  async down(queryInterface) {
    await queryInterface.dropTable('Apps');
  },
};
