const Sequelize = require("sequelize");

const connection = new Sequelize('blogpainel', 'root', 'naej', { //sempre mudar a senha naej ou 2280

  host: 'localhost',
  dialect: 'mysql'

});
module.exports = connection;
