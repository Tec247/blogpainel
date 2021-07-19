const express = require("express");
const bodyParser = require("body-parser");
const connection = require("./database/database");

const app = express();

//view engine

app.set('view engine', 'ejs');

//Static assets

app.use(express.static('public'))

//Body-Parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Databases

connection
  .authenticate()
  .then(() => {
    console.log("Conexão feita com sucesso!");
  }).catch((error) => {
    console.log(error);
  })

app.get("/", (req, res) => {
  res.render("index");

});

app.listen(5050, () => {
  console.log("O servidor está rodando");
});