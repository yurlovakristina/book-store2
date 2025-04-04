import { Book } from "../models/book";

namespace Library {
  let books: Book[] = [];

  export function addBook(book: Book): void {
    books.push(book);
  }

  export function listBooks(): Book[] {
    return books;
  }
}

export default Library;
