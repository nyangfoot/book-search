import { useLocation } from 'react-router-dom';

function BookDetail() {
    // 선택한 책의 정보를 state 값이 갖고 있음!!
    const { state } = useLocation();
    console.log(state);
    return (
        <div>
        </div>
    )
}

export default BookDetail;