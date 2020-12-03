import React, { useState, useContext } from "react";
import BookList from "./BookList";
import "../App.css";

import BookContext from "./context/book-context";

function BookInput(){
    const [book, setBook] = useState("");
    const { addBook } = useContext(BookContext);

    const onChangeHandler = (e) => {
        setBook(e.target.value);
    };

    const onSubmitHandler = (e) => {
        e.preventDefault();

        // {id; 111, text: 'some text' complete: false}
        const newBook = {
            id: Math.random(),
            text: book,
            complete: false,
        };

        addBook(newBook);

        setBook("");
    };
    return(
        <>
          <div className="container">
              <div className="adding-container">
                  <h1>Book List</h1>
                  <form onSubmit={onSubmitHandler}>
                      <input
                      className="entry-field"
                      placeholder="enter a book..."
                      type="text"
                      onChange={onChangeHandler}
                      value={book}
                      name="book"
                      />
                      <br />
                      <button className="add-btn">ADD</button>
                  </form>
              </div>
              <BookList />
          </div>
        </>
    );
};

export default BookInput;