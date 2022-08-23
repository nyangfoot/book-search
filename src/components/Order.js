import React, { useMemo } from "react";
import styled from "styled-components";
import useActions from "../hooks/useActions";
import useBooks from "../hooks/useBooks";
import useOrders from "../hooks/useOrders";
import BookList from "../components/BookList";

import "../css/Order.scss";

import { MdDelete, MdShoppingCart } from "react-icons/md";

const Order = () => {
  const orders = useOrders();
  const { books } = useBooks();
  const { remove, onModal, updateToggle, setUpdateToggle } = useActions();

  return (
    <>
      {updateToggle === true ? (
        <div className="order-wrap">
          <h3 className="order-title">
            {" "}
            <MdShoppingCart size={24} /> <b>도서 선택</b>
          </h3>
          {orders.map((order) => {
            const { orderBook, quantity } = order;
            const click = () => {
              // remove(isbn);
            };
            return (
              <>
                <div className="item" key={orderBook.isbn}>
                  <div className="bookImg">
                    <img src={orderBook.thumbnail} alt={orderBook.thumbnail} />
                  </div>
                  <div className="content">
                    <p key={orderBook.isbn} className="bookTitle">
                      {orderBook.title} <br /> {quantity}권
                    </p>
                    <p className="bookPrice">
                      <p className="price-text">
                        정상가 {orderBook.price}
                        <b>원</b>
                      </p>
                      할인가 {orderBook.sale_price * quantity}
                      <span>원</span>
                    </p>
                  </div>
                  <div className="icon">
                    <span>
                      <MdDelete onClick={click} size={18} />
                    </span>
                  </div>
                </div>
              </>
            );
          })}
          <div>
            <hr />
            <div className="total-item">
              <div className="total">합계금액</div>
              {/* <div className='bookTotalPrice'>{totalPrice}<span> 원</span></div> */}
            </div>

            <div className="total-btn">
              <button
                className="remove-btn"
                onClick={() => {
                  onModal(false);
                }}
              >
                닫기
              </button>
              <button
                className="cart-btn"
                onClick={() => alert("장바구니에 담았습니다")}
              >
                장바구니 담기
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Order;
