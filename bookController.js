// bookController.js
const Book = require('./Book.js');

exports.index = (req, res) => {
    Book.getAllBooks(function(err, books) {
        if (err) {
            // Tratar erro
            return res.send('Erro ao buscar livros.');
        }
        res.render('index', { lista: books });
    });
};

exports.searchByTitle = (req, res) => {
    let title = req.query.titulo || '';
    Book.findBooksByTitle(title, function(err, books) {
        if (err) {
            // Tratar erro
            return res.send('Erro ao buscar livros.');
        }
        res.render('index', { lista: books });
    });
};

exports.searchByYear = (req, res) => {
    let year = req.params.ano || '';
    Book.findBooksByYear(year, function(err, books) {
        if (err) {
            // Tratar erro
            return res.send('Erro ao buscar livros.');
        }
        res.render('index', { lista: books });
    });
};
