import axios from "axios";

export const getBookList = async (query, size) => {
    const KAKAO_KEY = process.env.REACT_APP_KAKAO_KEY;
    // console.log(KAKAO_KEY)
    const param = {
        query: query,
        size: size,
    }

    const response = await axios.get("/search/book", {
        params: {
            query: query,
            size: size,
        },
        headers: {
            Authorization: "KakaoAK "+KAKAO_KEY,
            withCreadentials: true,
        },
    });
    return response;
}