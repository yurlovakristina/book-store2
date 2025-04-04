"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const library_1 = __importDefault(require("./library"));
var Cart;
(function (Cart) {
    let cart = [];
    function addToCart(bookTitle) {
        const books = library_1.default.listBooks();
        const book = books.find(b => b.title === bookTitle);
        if (book) {
            cart.push(book);
        }
    }
    Cart.addToCart = addToCart;
    function totalPrice() {
        return cart.reduce((sum, book) => sum + book.price, 0);
    }
    Cart.totalPrice = totalPrice;
    function listCart() {
        return cart;
    }
    Cart.listCart = listCart;
})(Cart || (Cart = {}));
exports.default = Cart;
