// Importações
const express = require('express')
const route = express.Router()

const Livro = require('../controllers/livro.controller')
const { model } = require('../model/livro.model')

// Rotas

// Cria livro
route.post('/criarLivro', Livro.criarLivro)

// Visualiza todos os livros
route.get('/visualizarTodosLivros', Livro.visualizarTodosLivros)

// Visualiza um livro
route.get('/visualizarUmLivro/:titulo', Livro.visualizarUmLivro)

// Atualizando livro
route.put('/atualizarLivro/:titulo', Livro.atualizandoLivro)

// Deletando livro
route.delete('/deletarLivro/:titulo', Livro.deletandoLivro)

// exportar
module.exports = route