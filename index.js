// Небольшая проверка: подключаемся к БД и работаем с моделью App
const sequelize = require('./config/db');
const App = require('./models/App');

(async () => {
  try {
    await sequelize.authenticate();
    console.log('Подключение к MySQL успешно');

    await App.create({ name: 'Telegram', size: 120 });
    const apps = await App.findAll({ raw: true });
    console.log('Записи в таблице Apps:', apps);
  } catch (error) {
    console.error('Ошибка:', error.message);
  } finally {
    await sequelize.close();
  }
})();
