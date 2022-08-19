import React from "react";
import axios from 'axios';
import { getBookList } from "../api/getBookList";

function BooksList() {
    const getData = getBookList("미움받을 용기", 10);
    getData
        .then((response) => console.log(response))
        .catch((err) => console.log(err));

    return (
        <div>
            <div>
                <div>
                    <img></img>
                    <p>Title</p>
                    <p>price</p>
                    <p>장바구니버튼</p>
                </div>
            </div>
            <div>
                page number
            </div>
        </div>
    )
}

export default BooksList;