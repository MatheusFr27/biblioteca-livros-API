const modeloautor = require('../model/autor.model')

class Autor {

    criarAutor (req, res) {
        const body = req.body

        modeloautor.create(body, (err, data) => {
            
            if (err) {
                res.status(500).send({ message: 'Houve um problema ao criar o autor.', error: err })
            } else {
                res.status(200).send({ message: 'Autor criado com sucesso!', autor: data})
            }
        })
    }

    visualizarTodosAutores (req, res) {

        modeloautor.find({}, (err, data) => {

            if (err) {
                res.status(500).send({ message: 'Houve um erro ao procurar pelos Autores', error: err })
            } else {
                res.status(200).send({ message: 'Autores encontrados com sucesso!', autor: data })
            }
        })
    }

    visualizarUmAutor (req, res) {
        const nome = req.params.nome

        modeloautor.find({nome: nome}, (err, data) => {

            if (err) {
                res.status(500).send({ message: 'Houve um erro ao procurar pelo autor', error: err })
            } else {
                res.status(200).send({ message: 'Autor encontrado com sucesso.', autor: data })
            }
        })
    }

    atualizarAutor (req, res) {
        const nome = req.params.nome

        modeloautor.updateOne({nome: nome}, {$set: req.body}, (err, data) => {

            if(err) {
                res.status(500).send({ message: 'Houve um problema ao atualizar o Autor', error: err })
            } else {
                res.status(200).send({ message: 'Autor atualizado com sucesso', autor: data })
            }
        })
    }

    deletarAutor (req, res) {
        const nome = req.params.nome

        modeloautor.deleteOne({nome: nome}, (err, data) => {

            if (err) {
                res.status(500).send({ message: 'Houve um problema ao deletar autor', error: err })
            } else {
                res.status(200).send({ message: 'Autor deletado com sucesso!', autor: data })
            }
        })
    }

}

module.exports = new Autor()