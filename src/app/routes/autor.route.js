// Importações
const express = require('express')
const route = express.Router()

const Autor = require('../controllers/autor.controller')
const { model } = require('../model/autor.model')

// Rotas
route.post('/criarAutor', Autor.criarAutor)

route.get('/visualizarTodosAutores', Autor.visualizarTodosAutores)

route.get('/visualizarUmAutor/:nome', Autor.visualizarUmAutor)

route.put('/atualizarAutor/:nome', Autor.atualizarAutor)

route.delete('/deletarAutor/:nome', Autor.deletarAutor)

// Exportação
module.exports = route