const { Sequelize } = require('sequelize');
const config = require('./config.json');

// Берём настройки для текущей среды (по умолчанию development)
const env = process.env.NODE_ENV || 'development';
const dbConfig = config[env];

// Создаём экземпляр Sequelize с параметрами из config.json
const sequelize = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, {
  host: dbConfig.host,
  dialect: dbConfig.dialect,
  logging: false,
});

module.exports = sequelize;
