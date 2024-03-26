// app.js
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const bookController = require('./bookController.js');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));

// Rotas
app.get('/', bookController.index);
app.get('/search', bookController.searchByTitle);
app.get('/search/:ano', bookController.searchByYear);

const PORT = 3000;
app.listen(PORT, () => {
    console.log('Servidor rodando na porta ' + PORT);
});
