import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import useBooks from '../hooks/useBooks';
import useActions from '../hooks/useActions';
import { MdShoppingCart } from "react-icons/md";
import '../css/BookList.scss';
import defaultImage from '../assets/no-picture.jpg';




const BookList = () => {

  const { books } = useBooks();
  const { addToOrder, onModal, updateToggle, setUpdateToggle } = useActions();
 
  console.log(books);

  return (
    <div className='book-list-wrap'>
      {books?.documents?.map((book) => {
        const { isbn, thumbnail, title, price, sale_price, publisher, url, datetime } =
          book;

          const click = () => {
          addToOrder(isbn);
        };
        
   
        
        return (
          <div className='info-wrap' key={title}>
            {/* 책 이미지 */}
            <div>
              <a href={url} target='_blank' rel='noreferrer'>
                <img src={thumbnail ? thumbnail : defaultImage} alt={thumbnail} />
              </a>
            </div>

            {/* 북 정보 */}
            <div className='book-info'>
              <div><b>제목</b> {title}</div>
              <div>
                <b>가격</b> {price.toLocaleString()}
                <p><b>할인가</b> {sale_price.toLocaleString()}</p>
                {/* <p>{datetime}</p> */}
              </div>
              {/* CART아이콘 */}
              <div className='cart-icon'> 
                <MdShoppingCart onClick={ () => {
                  click()
                  onModal(true)
                }} size="18" />
              </div>
            </div>

          </div>
        );
      })}
    </div>
  );
};


export default BookList;