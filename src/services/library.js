"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Library;
(function (Library) {
    let books = [];
    function addBook(book) {
        books.push(book);
    }
    Library.addBook = addBook;
    function listBooks() {
        return books;
    }
    Library.listBooks = listBooks;
})(Library || (Library = {}));
exports.default = Library;
