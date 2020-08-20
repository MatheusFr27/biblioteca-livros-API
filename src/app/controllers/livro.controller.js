// Importações
const modelolivro = require('../model/livro.model')

// Classe de Livros
class Livros {

    criarLivro (req, res){
        const body = req.body

        modelolivro.create(body, (err, data) => {
            
            if (err) {
                res.status(500).send({ message: 'Houve um problema ao registrar seu livro', error: err})
            } else {
                res.status(200).send({ message: 'Livro registrado com sucesso!', livro: data})
            }
        })
    }

    visualizarTodosLivros (req, res) {

        modelolivro.find({}, (err, data) => {

            if (err) {
                res.status(500).send({ message: 'Houve um problema em procurar os livros', error: err })
            } else {
                res.status(200).send({ message: 'Livros localizados com sucesso!', livro: data })
            }
        })
    }

    visualizarUmLivro (req, res) {
        const tituloL = req.params.titulo

        modelolivro.find({titulo: tituloL}, (err, data) => {

            if (err) {
                res.status(500).send({ message: 'Houve um problema ao localizar este livro.', error: err })
            } else {
                res.status(200).send({ message: `O Livro selecionado foi alterado para ${tituloL} com sucesso!`, livro: data })
            }
        })
    }

    atualizandoLivro (req, res) {
        const tituloL = req.params.titulo

        modelolivro.updateOne({titulo: tituloL}, {$set: req.body}, (err, data) => {

            if (err) {
                res.status(500).send({ message: 'Houve um erro ao atualizar o livro.', error: err })
            } else {
                res.status(200).send({ message: `O livro ${tituloL} foi alterado com sucesso!`, livro: data })
            }
        })
    }
}

module.exports = new Livros()