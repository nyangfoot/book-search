import { useLocation } from 'react-router-dom';

function BookDetail() {
    // 선택한 책의 정보를 state 값이 갖고 있음!!
    const { state } = useLocation();
    console.log(state);
    


    return (
        <div>
            <div><b>도서명</b>{ state.title }</div>
            <div>
                <b>정가</b>{ state.price }
                <p><b>할인가</b></p>{ state.sale_price.toLocaleString() }
            </div>
            <div><b>출판사</b>{ state.publisher }</div>
            <div><b>도서상품 상태</b>{ state.status }</div>
            <div><b>저자</b>{ state.authors }</div>
            <img src={state.thumbnail}></img>
            
        </div>
    )
}

export default BookDetail;