const Sequelize = require("sequelize");

const connection = new Sequelize('blogpainel', 'root', '2280', {

  host: 'localhost',
  dialect: 'mysql'

});
module.exports = connection;
