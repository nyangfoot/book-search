import axios from "axios";

export const getBookList = async (query, size) => {
    const api_url = "http://dapi.kakao.com/v3/search/book"
    const KAKAO_KEY = process.env.REACT_APP_KAKAO_KEY;
    // console.log(KAKAO_KEY)
    const param = {
        query: query,
        size: size
    }

    const response = await axios.get("/v3/search/book", {
        params:param},{
        headers: {
            Authorization: 'KakaoAK ' + KAKAO_KEY
        }
    });
    return response;
}