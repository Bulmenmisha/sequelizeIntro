# ДЗ 7: Sequelize ORM, модель и миграция

Структура (как после `npx sequelize-cli init`):
```
config/config.json   настройки подключения
config/db.js         экземпляр Sequelize
models/App.js        модель App (таблица Apps)
migrations/          миграция create-apps-table
seeders/
```

## Подготовка
1. Создай базу в MySQL:
   ```sql
   CREATE DATABASE database_development;
   ```
2. В `config/config.json` (раздел `development`) впиши свой пароль от MySQL.
3. Установи зависимости:
   ```bash
   npm install
   ```

## Миграция
```bash
npx sequelize-cli db:migrate        # создаёт таблицу Apps
npx sequelize-cli db:migrate:undo   # откатывает (удаляет таблицу)
```
Потом проверь в MySQL Workbench, что таблица `Apps` появилась.

## Проверка модели
```bash
node index.js
```
