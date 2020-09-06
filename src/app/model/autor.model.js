// Importações
const { Schema, model, Mongoose } = require('mongoose')

// Modelo
const ModeloAutor = new Schema({

    nome: {
        type: String,
        required: true,
        maxlength: 51,
        trim: true
    },
    idade: {
        type: Number,
        required: false
    },
    autoria: [
        {
            type: Schema.Types.ObjectId,
            ref: 'livro'
        }
    ]
},
    {
        timestamps: true,
        versionKey: false
    }
)

module.exports = model('autor', ModeloAutor)