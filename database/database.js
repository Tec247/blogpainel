const Sequelize = require("sequelize");

const connection = new Sequelize('blogpainel', 'root', 'naej', {

  host: 'localhost',
  dialect: 'mysql',
  timezone: "-03:00"

});
module.exports = connection;
