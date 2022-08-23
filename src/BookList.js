import React, { useState, useEffect } from "react";
import styled from "styled-components";
import useBooks from "../hooks/useBooks";
import useActions from "../hooks/useActions";
import { MdShoppingCart } from "react-icons/md";
import "../css/BookList.scss";
import defaultImage from "../assets/no-picture.jpg";

const BookList = () => {
  const { books } = useBooks();
  const { addToOrder, onModal, updateToggle, setUpdateToggle } = useActions();

  return (
    <div className="book-list-wrap">
      {books?.documents?.map((book) => {
        const click = () => {
           addToOrder(book);
         };

        //  품절 값 
       const sPrice = book.sale_price;

        return (
          <div className="info-wrap" key={book.title}>
            {/* 책 이미지 */}
            <div>
              <a href={book.url} target="_blank" rel="noreferrer">
              <img
              src={book.thumbnail ? book.thumbnail : defaultImage}
              alt={book.thumbnail}
              />
              </a>
            </div>
            
            {/* 북 정보 */}
            <div className="book-info">
              <div>
                 <b>제목</b> {book.title}
              </div>
              <div>
             
                <b>가격</b> {book.price.toLocaleString()}
                <p>
                 <b>할인가 </b> 
                {sPrice === -1 ? <b>품절</b>:<b>{book.sale_price.toLocaleString()}</b> }
                </p>
              </div>

              {/* CART아이콘 */}
              <div className="cart-icon">
                <MdShoppingCart
                onClick={() => {
                click();
                onModal(true);
                }}
                size="18"
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BookList;
