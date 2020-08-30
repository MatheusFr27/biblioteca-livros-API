// Importações
const {Schema, model, Mongoose} = require('mongoose')


// Modelo
const ModeloLivro = new Schema({

    titulo: {
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
    },
    autor: {
        type: Schema.Types.ObjectId,
        ref: 'autor'
    }
},
    {
        versionKey: false,
        timestamps: true
    }
)

module.exports = model('livro', ModeloLivro)