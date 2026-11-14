const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

// Модель App: таблица Apps с полями id, name, size
const App = sequelize.define(
  'App',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false, // обязательное поле
    },
    size: {
      type: DataTypes.INTEGER,
      allowNull: false, // обязательное поле
    },
  },
  {
    tableName: 'Apps',  // явно указываем имя таблицы
    timestamps: false,  // без createdAt / updatedAt
  }
);

module.exports = App;
