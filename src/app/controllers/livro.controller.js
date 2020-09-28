// Importações
const livro = require('../model/livro.model')
const autor = require('../model/autor.model')

// Classe de Livros
class Livros {

    criarLivro(req, res) {
        const reqBody = req.body
        const idAutor = reqBody['autor']

        livro.create(reqBody, (err, livro) => {

            if (err) {
                res.status(500).send({ message: 'Houve um erro ao processar sua requisição!', error: err })
            } else {
                autor.findById(idAutor, (err, autor) => {

                    if (err) {
                        res.status(500).send({ message: 'Houve um problema ao processar sua requisição', error: err })
                    } else {
                        autor.autoria.push(livro)
                        autor.save({}, (err) => {
                            if (err) {
                                res.status(500).send({ message: 'Houve um erro ao processar sua requisição', error: err })
                            } else {
                                res.status(200).send({ message: 'Filme criado com sucesso', data: autor})
                            }
                        })
                    }
                })
            }
        })
    }

    visualizarTodosLivros(req, res) {

        livro.find({})
            .populate('autor', { nome: 1, imagemA: 1 })
            .sort({ nome: 1 })
            .exec((err, data) => {

                if (err) {
                    res.status(500).send({ message: 'Houve um problema em procurar os livros', error: err })
                } else {
                    if (data.length <= 0) {
                        res.status(200).send({ message: 'Não a filmes cadastrados no Banco de dados', livro: data })
                    } else {
                        res.status(200).send({ message: 'Livros localizados com sucesso!', livro: data })
                    }
                }
            })
    }

    visualizarUmLivro(req, res) {
        const  tituloL = req.params.titulo

        livro.findOne({ titulo: tituloL })
            .populate('autor', { nome: 1, imagemA: 1 })
            .exec((err, data) => {

                if (err) {
                    res.status(500).send({ message: 'Houve um problema ao localizar este livro.', error: err })
                } else {
                    res.status(200).send({ message: `O Livro foi encontrado com sucesso!`, livro: data })
                }
            })
    }

    atualizandoLivro(req, res) {
        const tituloL = req.params.titulo

        livro.updateOne({ titulo: tituloL }, { $set: req.body }, (err, data) => {

            if (err) {
                res.status(500).send({ message: 'Houve um erro ao atualizar o livro.', error: err })
            } else {
                res.status(200).send({ message: `O livro ${tituloL} foi alterado com sucesso!`, livro: data })
            }
        })
    }

    deletandoLivro(req, res) {
        const tituloL = req.params.titulo

        livro.deleteOne({ titulo: tituloL }, (err, data) => {

            if (err) {
                res.status(500).send({ message: `Houve um problema ao deletar o livro ${titulo} do banco de dados`, error: err })
            } else {
                res.status(200).send({ message: `Livro ${tituloL} deletado com sucesso.`, livro: data })
            }
        })
    }
}

module.exports = new Livros()