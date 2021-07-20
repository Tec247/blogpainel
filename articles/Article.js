const Sequelize = require("Sequelize");
const connection = require("../database/database");
const Category = require("../categories/Category");

const Article = connection.define('articles',{
  title:{
    type: Sequelize.STRING,
    allowNull: false,
    }, slug: {
      type: Sequelize.STRING,
      allowNull: false
    }, 
    body:{
      type: Sequelize.TEXT,
      allowNull: false,
    }
})

//Expressando relacionamento no Sequelize
Category.hasMany =(Article); // Um para muitos
Article.belongsTo(Category); //Um artigo pertece a uma categoria
// de 1-Para-1 => Sequelize é representado por belongsTo()
// de 1-Para-Muitos => Sequelize é representado por hasMany()

//Article.sync({force:true});

module.exports = Article;