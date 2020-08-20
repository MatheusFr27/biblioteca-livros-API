// Importações
const express = require('express')
const route = express.Router()

const Livro = require('../controllers/livro.controller')
const { model } = require('../model/livro.model')

// Rotas
route.post('/criarLivro', Livro.criarLivro)

route.get('/visualizarTodosLivros', Livro.visualizarTodosLivros)

route.get('/visualizarUmLivro/:titulo', Livro.visualizarUmLivro)

// exportar
module.exports = route