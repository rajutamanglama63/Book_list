import React, { useContext } from "react";
import "../App.css";
import BookContext from "./context/book-context";

function BookItem({ text, clickToDelete }) {

    return(
        <div className="book-item">
            <span className="book-name">{text}</span>
            <div>
                {/* <button className="btn-tog">Toggle</button> */}
                <button className="btn-del" onClick={clickToDelete}>Delete</button>
            </div>
        </div>
    );
};

export default BookItem;