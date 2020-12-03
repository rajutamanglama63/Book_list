import React,{ useContext } from "react";
import BookItem from "./BookItem";
import "../App.css";

import BookContext from "./context/book-context";

function BookList() {
    const { books, deleteBook } = useContext(BookContext);
    return(
        <>
          <div className="list-container">
              <h2>Books</h2>
              {books.map((book) => {
                  return (
                    <BookItem key={book.id} text={book.text} clickToDelete={() => deleteBook(book.id)} />
                  )
              })}
          </div>
        </>
    );
};

export default BookList;