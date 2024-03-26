// Book.js
const mysql = require('mysql2');

const pool = mysql.createPool({
    host: process.env.host,
    user: process.env.user,
    password: process.env.password,
    database: process.env.database
});

const getAllBooks = (callback) => {
    pool.query('SELECT * FROM books', function(err, results) {
        callback(err, results);
    });
};

const findBooksByTitle = (title, callback) => {
    pool.query('SELECT * FROM books WHERE title LIKE ?', [`%${title}%`], function(err, results) {
        callback(err, results);
    });
};

const findBooksByYear = (year, callback) => {
    pool.query('SELECT * FROM books WHERE year = ?', [year], function(err, results) {
        callback(err, results);
    });
};

module.exports = { getAllBooks, findBooksByTitle, findBooksByYear };
