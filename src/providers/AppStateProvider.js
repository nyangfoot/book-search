import { computeHeadingLevel } from '@testing-library/react';
import React, { useCallback, useEffect, useState, useRef } from 'react';
import { bookSearch } from '../api/API_KEY';
import AppStateContext from '../contexts/AppStateConText';

const AppStateProvider = ({ children }) => {
  const [books, setBooks] = useState([]);
  const [query, setQuery] = useState('');

  // 첫 화면 초기값 세팅
  useEffect(() => {
    bookSearchHttpHandler("리액트", true);
  }, []);

  // 검색을 통해 query 값이 변경되면 api 호출
  useEffect(() => {
    if (query.length > 0) {
      bookSearchHttpHandler(query, true); // 컴포넌트 마운트 후에, 함수를 호출한다.
    }
  }, [query]);

  // book searcch 핸들러
  const bookSearchHttpHandler = async (query, reset, page = bookPage) => {
    // paramter 설정
    const params = {
      query: query,
      sort: 'accuracy', // accuracy | recency 정확도 or 최신
      page: page, // 페이지번호
      size: bookListCounts, // 한 페이지에 보여 질 문서의 개수
    };

    // console.log(params);

    const { data } = await bookSearch(params); // api 호출
    // 리스트를 초기화한 후에 다시 랜더링할 것인가를 의미
    if (reset) {
      setBooks(data);
    } else {
      setBooks(books.documents.concat(data.documents));
    }

    // console.log(books)
  };

  const searchBook = (text) => {
    setQuery(text);
    setBookPage(1);
  };
  const [orders, setOrders] = useState([]);
  // 장바구니 추가
  // orders의 orderBook : 책의 정보, quantity: 해당 책의 갯수
  // useCallback으로 받아오는 book : 선택된 책의 정보
  const addToOrder = useCallback((book) => {
    // console.log(book);
    setOrders((orders) => {
      // 동일한 책을 추가할 땐 2권, 3권 으로 변경해주기 위해 동일한 isbn가 있는지 검사
      const finded = orders.find((order) => order.orderBook.isbn === book.isbn);
      // 장바구니에 동일한 책이 없으면 quantity에 1을 넣어줌
      if (finded === undefined) {
        return [...orders, { orderBook: book, quantity: 1 }];
      } // 동일한 책이 있으면
      else {
        return orders.map((order) => {
          // 동일한 책을 찾아 quantity 값을 증가 시켜주기위함.
          if (order.orderBook.isbn === book.isbn) {
            return {
              orderBook: book,
              quantity: order.quantity + 1,
            };
          } else {
            return order;
          }
        });
      }
    });
  }, [orders]);

  // 장바구니에서 책 삭제하기
  const remove = useCallback((isbn) => {
    console.log(isbn);
    setOrders((orders) => {
      return orders.filter((order) => order.orderBook.isbn !== isbn);
    });
  }, [orders]);

  // 장바구니에서 전체 책 삭제하기
  const removeAll = useCallback(() => {
    setOrders([]);
  }, [orders]);


  // 최신순 , 가격순 정렬
  // 최신순 정렬
  const handleNewest = (order) => {
    // 최신순 정렬을 위해서 Date 객체의 getTime 함수로 밀리세컨 단위로 변경
    const newestBooks = [...books.documents].sort((book1, book2) => new Date(book2[order]).getTime() - new Date(book1[order]).getTime());
    // console.log(newestBooks);
    setBooks({
      documents: newestBooks
    });
  }

  // 높은 가격 순 정렬
  const handleHighPrice = (order) => {
    const highPriceBooks = [...books.documents].sort((book1, book2) => book2[order] - book1[order]);
    // console.log(highPriceBooks);
    setBooks({
      documents: highPriceBooks
    });
  }

  // 낮은 가격 순 정렬
  const handleLowPrice = (order) => {
    console.log(books.meta);
    const lowPriceBooks = [...books.documents].sort((book1, book2) => book1[order] - book2[order]);
    // console.log(lowPriceBooks);
    setBooks({
      documents: lowPriceBooks
    });
  };

  // 장바구니 모달
  const [updateToggle, setUpdateToggle] = useState(false);

  const onModal = (value) => {
    // setUpdateToggle(!updateToggle)
    setUpdateToggle(value)
  }

  const [bookListCounts, setBookListCounts] = useState(9)

  const handleBookListCounts = (e) => {
    setBookListCounts(e.target.value);
  }

  const [bookPage, setBookPage] = useState(1)

  const handleBookPage = (value) => {
    setBookPage(value);
  }

  const handleNextPage = (page) => {
    bookSearchHttpHandler(query, true, page);
  }


  return (
      <AppStateContext.Provider
        value={{
          books,
          searchBook,
          orders,
          addToOrder,
          remove,
          removeAll,
          handleNewest,
          handleHighPrice,
          handleLowPrice,
          onModal,
          updateToggle,
          setUpdateToggle,
          bookListCounts,
          setBookListCounts,
          handleBookListCounts,
          bookPage,
          setBookPage,
          handleBookPage,
          handleNextPage
        }}>
        {children}
      </AppStateContext.Provider>

  );
};

export default AppStateProvider;