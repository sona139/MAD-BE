const { Sequelize } = require("sequelize");

require("dotenv/config");

module.exports = new Sequelize('cashflow', 'root', 'Iuhuyennhat1-', {
  host: '127.0.0.1',
  dialect: 'mysql',
});
