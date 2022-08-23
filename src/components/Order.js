import React, { useMemo } from 'react';
import styled from 'styled-components';
import useActions from '../hooks/useActions';
import useBooks from '../hooks/useBooks';
import useOrders from '../hooks/useOrders';
import BookList from '../components/BookList'

import '../css/Order.scss'

import { MdDelete, MdShoppingCart } from "react-icons/md";

const Order = () => {

  const orders = useOrders();
  const { books } = useBooks();
  const { remove, removeAll, onModal, updateToggle, setUpdateToggle } = useActions();
  
  // const closeModal = updateToggle => {
  //   updateToggle(false)
  //   console.log(closeModal)
  // }
 
  const totalPrice = useMemo(() => {
    return orders
      .map((order) => {
        const { isbn, quantity } = order;
        const book = books.documents.find((b) => b.isbn === isbn);
        return book.sale_price * quantity;
      })
      .reduce((l, r) => l + r, 0);
  }, [orders, books]);

  
  
  // if (orders.length === 0) {
  //   return (
  //     <div className='order-wrap'>
  //       <h3 className='order-title'> <MdShoppingCart size={24} /> <b>도서 선택</b> </h3>
  //       <p className='sub-title'>책을 추가해주세요.</p>
  //     </div>
  //   );
  // }

  return (
    <>
      {
        updateToggle === true 
        ?
      <div className='order-wrap'>
        <h3 className='order-title'> <MdShoppingCart size={24} /> <b>도서 선택</b></h3>
        {orders.map((order) => {
          const { isbn } = order;
          const book = books.documents.find((b) => b.isbn === isbn);
          const click = () => {
            remove(isbn);
          };
          return (
            <>
              <div className='item' key={isbn}>
                <div className='bookImg'>
                  <img src={book.thumbnail} alt={book.thumbnail} />
                </div>
                <div className='content'>
                  <p key={isbn} className='bookTitle'>
                    {book.title} <br /> {order.quantity}권
                  </p>
                  <div className='bookPrice'>
                   <p className='price-text'>정상가 {book.price}<b>원</b></p>
                   할인가 {book.sale_price * order.quantity}<span>원</span>
                  </div>
                </div>
                <div className='icon'>
                 <span><MdDelete onClick={click} size={24} /></span>
                </div>
              </div>
            </>
          );
        })}
        <div>
          <hr />
          <div className='total-item'>
            <div className='total'>합계금액</div>
            <div className='bookTotalPrice'>{totalPrice}<span> 원</span></div>
    
          </div>

          <div className='total-btn'>
                <button className='del-btn' onClick={() => {onModal(false)}}>닫기</button>
                <button className='cart-btn' onClick={() => alert('장바구니에 담았습니다')}>장바구니 담기</button>
          </div>
        </div>
      </div>
      :
      null
      }
    </>
  );
};



export default Order;