// Importações

const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')

const PORT = process.env.PORT || 3000

const dataBase = require('./src/config/database')

const livrosRoute = require('./src/app/routes/livro.route')


// Configurações

// Configurar Body-parser
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.text())
app.use(bodyParser.json())
app.use(bodyParser.json({ type: 'application/json' }))

// configurando Cors
app.use(cors())

// configurando cabeçalho de resposta
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Header', 'Origin, X-Requestred-With, Content-Type, Accept')
    next()
})


// Rotas

// Colocar rota de Routes
app.use('/livro', livrosRoute)

// Inserir / no endpoint
app.get('/', (req, res) => {
    res.send({ message: `API atendendo na porta ${PORT}.`})
})

// Inserir caminho coringa
app.use('*', (req, res) => {
    res.send({ message: 'Caminho não encontrado.'})
})

// Iniciar servidor na porta respectiva
app.listen(PORT, () => {
    console.log(`API atendendo na porta ${PORT}.`)
})