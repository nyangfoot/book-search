import React, { useCallback, useEffect, useState, useRef } from 'react';
import { bookSearch } from '../api/API_KEY';
import AppStateContext from '../contexts/AppStateConText';

const AppStateProvider = ({ children }) => {
  const [books, setBooks] = useState([]);
  const [query, setQuery] = useState('');

  //  let isInit = useRef(false);
  // // // 책 검색
  //  useEffect(() => {
  //    if (isInit) {
  //      bookSearchHttpHandler('나', false); // 컴포넌트 마운트 후에, 함수를 호출한다.
  //      isInit.current = true
  //    }
  //  }, []);

  // 첫 화면 초기값 세팅
  useEffect(() => {
    bookSearchHttpHandler("리액트", true);
  }, []);

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

    console.log(params);

    const { data } = await bookSearch(params); // api 호출
    if (reset) {
      setBooks(data);
    } else {
      setBooks(books.documents.concat(data.documents));
    }

    console.log(books)
  };

  const searchBook = (text) => {
    setQuery(text);
    setBookPage(1);
  };
  const [orders, setOrders] = useState([]);

  // 장바구니 추가
  // [{isbn, quantity : 1}]
  const addToOrder = useCallback((isbn) => {
    setOrders((orders) => {
      // 동일한 책을 추가할 땐 2권, 3권 으로 변경해주기 위해 동일한 isbn가 있는지 검사
      const finded = orders.find((order) => order.isbn === isbn);
      // 장바구니에 동일한 책이 없으면 quantity에 1을 넣어줌
      if (finded === undefined) {
        return [...orders, { isbn, quantity: 1 }];
      } // 동일한 책이 있으면
      else {
        return orders.map((order) => {
          if (order.isbn === isbn) {
            return {
              isbn,
              quantity: order.quantity + 1,
            };
          } else {
            return order;
          }
        });
      }
    });
  }, []);

  // 장바구니에서 책 삭제하기
  const remove = useCallback((isbn) => {
    setOrders((orders) => {
      return orders.filter((order) => order.isbn !== isbn);
    });
  }, []);

  // 장바구니에서 전체 책 삭제하기
  const removeAll = useCallback(() => {
    setOrders([]);
  }, []);


  // 최신순 , 가격순 관리 
  const [order, setOrder] = useState('');
  const orderBooks = books?.documents?.sort((book1, book2) => book2[order] - book1[order]);
  const handleNewest = () => setOrder('datetime')
  const handleHighPrice = () => setOrder('price');
  
  const [order2, setOrder2] = useState('');
  const orderBooks2 = books?.documents?.sort((book1, book2) => book1[order2] - book2[order2]);
  const handleLowPrice = () => setOrder2('price');

  // 모달
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