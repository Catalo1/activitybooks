const books = require ("../models/booksModel");

const getAllBooks = (req, res) => {
    res.json(books);
};

module.exports = {
    getAllBooks,
};