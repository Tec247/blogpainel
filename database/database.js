const Sequelize = require("sequelize");

const connection = new Sequelize('blogpainel', 'root', 'naej', {

  host: 'localhost',
  dialect: 'mysql'

});
module.exports = connection;
