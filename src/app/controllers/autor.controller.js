const autor = require('../model/autor.model')
const livro = require('../model/livro.model')

class Autor {

    criarAutor(req, res) {
        const body = req.body

        autor.create(body, (err, data) => {

            if (err) {
                res.status(500).send({ message: 'Houve um problema ao criar o autor.', error: err })
            } else {
                res.status(200).send({ message: 'Autor criado com sucesso!', autor: data })
            }
        })
    }

    visualizarTodosAutores(req, res) {

        autor.find({}, (err, data) => {

            if (err) {
                res.status(500).send({ message: 'Houve um erro ao procurar pelos Autores', error: err })
            } else {
                res.status(200).send({ message: 'Autores encontrados com sucesso!', autor: data })
            }
        })
    }

    visualizarUmAutor(req, res) {
        const nome = req.params.nome

        autor.find({ nome: nome })
        .populate('livro', { titulo: 1 })
        .exec((err, data) => {

            if (err) {
                res.status(500).send({ message: 'Houve um problema em achar o Autor', error: err })
            } else {
                res.status(200).send({ message: 'Autor localizado com sucesso', autor: data })
            }
        })

    }

    atualizarAutor(req, res) {
        const nome = req.params.nome

        autor.updateOne({ nome: nome }, { $set: req.body }, (err, data) => {

            if (err) {
                res.status(500).send({ message: 'Houve um problema ao atualizar o Autor', error: err })
            } else {
                res.status(200).send({ message: 'Autor atualizado com sucesso', autor: data })
            }
        })
    }

    deletarAutor(req, res) {
        const nome = req.params.nome

        autor.deleteOne({ nome: nome }, (err, data) => {

            if (err) {
                res.status(500).send({ message: 'Houve um problema ao deletar autor', error: err })
            } else {
                res.status(200).send({ message: 'Autor deletado com sucesso!', autor: data })
            }
        })
    }

    visualizandoAutorELivros(req, res) {
        const { nome } = req.params

        autor.findOne({ nome: nome })
            .populate('livro', { nome: 1 })
            .exec((err, data) => {

                if (err) {
                    res.status(500).send({ message: 'Houve um problema ao localizar o autor e seus livros.', error: err })
                } else {
                    res.status(200).send({ message: 'Livros do autor encontrados com sucesso.', autor: data })
                }
            })
    }

}

module.exports = new Autor()