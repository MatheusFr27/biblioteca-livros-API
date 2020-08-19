// Importando as dependências
const mongoose = require('mongoose')
let db = null

require('dotenv').config()

// URI do banco de Dados
const URI_DATABASE = `mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}:${process.env.DB_HOST}/${process.env.DB_NAME}`

// Criar conexão com banco de dados
db = mongoose.connect(URI_DATABASE, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('Banco de Dados conectado com sucesso!'))
    .catch( error => console.log(`Problema ao conectar com o Banco de Dados, ERRO: ${error}`))


module.exports = ( db )