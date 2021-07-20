const express = require("express");
const router = express.Router();

router.get("/articles",(req,res)=>{
  res.send("Rota de Artigo");
})

router.get("/admin/articles/new",(req,res)=>{
  res.send("Rota Para Criar Uma Nova Artigo!");
})

module.exports = router;