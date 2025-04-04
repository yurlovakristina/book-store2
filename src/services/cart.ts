import { Book } from "../models/book";
import Library from "./library";

namespace Cart {
  let cart: Book[] = [];

  export function addToCart(bookTitle: string): void {
    const books = Library.listBooks();
    const book = books.find(b => b.title === bookTitle);
    if (book) {
      cart.push(book);
    }
  }

  export function totalPrice(): number {
    return cart.reduce((sum, book) => sum + book.price, 0);
  }

  export function listCart(): Book[] {
    return cart;
  }
}

export default Cart;
