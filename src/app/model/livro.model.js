// Importações
const {Schema, model} = require('mongoose')


// Modelo
const ModeloLivro = new Schema({

    titulo: {
        type: String,
        required: true,
        trim: true
    },
    autor: {
        type: String,
        required: true,
        trim: true
    },
    editora: {
        type: String,
        required: true,
        trim: true
    },
    tipo: {
        type: String,
        required: false,
        trim: true
    },
    quantidade: {
        type: Number,
        required: false,
    }
},
    {
        versionKey: false,
        timestamps: true
    }
)

module.exports = model('modelolivro', ModeloLivro)