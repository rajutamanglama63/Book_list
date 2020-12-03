import {ADD_BOOK, TOGGLE_BOOK, DELETE_BOOK} from "./book-action";

const bookReducer = (state, action) => {
    switch (action.type) {
        case ADD_BOOK:
            return{
                ...state,
                books: [...state.books, action.payload]
            };
        // case TOGGLE_BOOK:
        //     return{}
        case DELETE_BOOK:
            const newBook = state.books.filter((book) => book.id !== action.payload);
            return{
                books: newBook,
            }
        default:
            return state;
    }
};

export default bookReducer;