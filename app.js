const express = require("express"); // Importando o módulo express
const bodyParser = require("body-parser"); // Importando o módulo body-parser
const path = require("path"); // Importando o módulo path
const app = express(); // Inicializando o aplicativo express
app.use(bodyParser.json()); // Usando o body-parser para analisar solicitações JSON
app.use(bodyParser.urlencoded({ extended: true })); // Analisando solicitações de formulário
app.set("view engine", "ejs"); // Configurando o mecanismo de visualização para EJS
app.use(express.static(path.join(__dirname, "public"))); // Configurando o diretório público
app.set('views', path.join(__dirname, 'views'));

let books = [
    {
        "ID": 1,
        "title": "O Iluminado",
        "author": "Stephen King",
        "year": 1977
    },
    {
        "ID": 2,
        "title": "O Exorcista",
        "author": "William Peter Blatty",
        "year": 1971
    },
    {
        "ID": 3,
        "title": "Drácula",
        "author": "Bram Stoker",
        "year": 1897
    },
    {
        "ID": 4,
        "title": "Frankenstein",
        "author": "Mary Shelley",
        "year": 1818
    },
    {
        "ID": 5,
        "title": "O Médico e o Monstro",
        "author": "Robert Louis Stevenson",
        "year": 1886
    },
    {
        "ID": 6,
        "title": "Psicose",
        "author": "Robert Bloch",
        "year": 1959
    },
    {
        "ID": 7,
        "title": "Carrie, A Estranha",
        "author": "Stephen King",
        "year": 1974
    },
    {
        "ID": 8,
        "title": "O Corvo",
        "author": "Edgar Allan Poe",
        "year": 1845
    },
    {
        "ID": 9,
        "title": "O Chamado de Cthulhu",
        "author": "H.P. Lovecraft",
        "year": 1928
    },
    {
        "ID": 10,
        "title": "A Casa Infernal",
        "author": "Richard Matheson",
        "year": 1971
    }
] // Inicializando uma matriz vazia para armazenar livros

function searchArray(query, array, property) { // Definindo uma função para pesquisar em uma matriz de objetos
    const regex = new RegExp(query, 'i'); // Criando uma expressão regular para a pesquisa, ignorando maiúsculas e minúsculas
    return array.filter(obj => regex.test(obj[property])); // Filtrando a matriz de acordo com a pesquisa
}

app.get("/", (req, res) => res.render("index", {lista: books})); // Rota para renderizar a página inicial

app.get("/search", (req, res) => { // Rota para lidar com a pesquisa por título
    let title = req.query.titulo || '';
    let results = searchArray(title, books, 'title') // Realizando a pesquisa na matriz de livros
    let resultList = []
    results.forEach(book => { // Iterando sobre os resultados da pesquisa
        resultList.push(book)
    });
    res.render('index', { lista: resultList });
})

app.get(`/search/:ano`, (req, res) => { // Rota para lidar com a pesquisa por ano
    let year = req.params.ano || '';
    let resultList = []; // Inicializando uma string para armazenar a lista de resultados
    books.forEach(book => { // Iterando sobre a matriz de livros
        if (book.year === parseInt(year)) { // Verificando se o ano do livro corresponde ao ano fornecido na consulta
            resultList.push(book)
        }
    });
    res.render('index', { lista: resultList });
})

app.listen(3000, () => { // Iniciando o servidor na porta 3000
    console.log('Servidor rodando na porta 3000');
});
