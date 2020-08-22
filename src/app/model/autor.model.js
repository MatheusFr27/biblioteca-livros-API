// Importações
const {Schema, model} = require('mongoose')

// Modelo
const ModeloAutor = new Schema({

    nome: {
        type: String,
        required: true,
        maxlength: 51,
        trim: true
    },
    nascimento: {
        type: Date,
        required: false,
    }
},
    {
        timestamps: true,
        versionKey: false
    }
)

module.exports = model('modeloautor', ModeloAutor)