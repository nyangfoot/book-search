import { useLocation } from 'react-router-dom';
import '../css/BookDetail.css'

function BookDetail() {
    // 선택한 책의 정보를 state 값이 갖고 있음!!
    const { state } = useLocation();
    console.log(state);



    return (
        <div className='view'>

            <div className='bookWrap'>
                <div className='bookImg'><img src={state.thumbnail}></img></div>
                <div className='bookInfo'>
                    <div className='bookName'><h2>{state.title}</h2></div>
                    <div className='bookPrice'>
                        <p><b>정가 : </b>{state.price}<b>원</b></p>
                        <p><b>할인가 : </b><span className='bookSalePrice'>{state.sale_price.toLocaleString()} 원</span></p>
                    </div>
                    <div className='bookPublisher'><b>출판사 : </b>{state.publisher}</div>
                    <div className='bookAuthors'><b>저자 : </b>{state.authors}</div>
                    <div className='bookStatus'><b>도서 상태 : </b>{state.status}</div>
                    <hr />
                    <div className='bookContents'>도서 내용 : {state.contents}</div>
                </div>
            </div>
        </div>
    )
}

export default BookDetail;