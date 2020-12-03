import React, { useReducer } from "react";
import BookContext from "./book-context";
import bookReducer from "./book-reducer";

import {ADD_BOOK, TOGGLE_BOOK, DELETE_BOOK} from "./book-action";


function BookState(props) {
    const initialState = {
        books: [] //id: "123" text:"some text" complete: false
    }
    const [state, dispatch] = useReducer(bookReducer, initialState);

    // add book
    const addBook = (book) => {
        dispatch({
            type: ADD_BOOK,
            payload: book
        });
    };

    // toggle book
    // const toggleBook = (id) => {
    //     dispatch({
    //         type: TOGGLE_BOOK,
    //         payload: bookID
    //     });
    // };

    // delete book
    const deleteBook = (id) => {
        dispatch({
            type: DELETE_BOOK,
            payload: id
        });
    };


    return(
        <BookContext.Provider value={{
            books: state.books, 
            addBook,
            // toggleBook,
            deleteBook
        }}>
            {props.children}
        </BookContext.Provider>
    );
};

export default BookState;